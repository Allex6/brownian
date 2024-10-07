import { createParticle } from '../factories/particle.factory.js';
import {
    Particle,
    ParticleCreation,
} from '../interfaces/particle.interface.js';
import {
    SimulationInterface,
    SimulationOptions,
    SimulationOutput,
} from '../interfaces/simulation.interface.js';
import { randNormal } from '../utils/random.utils.js';

export class Simulation implements SimulationInterface {
    public running: boolean = false;
    public stopped: boolean = false;
    public particles: Particle[] = [];
    public options: SimulationOptions;

    private particles_history: Particle[][] = [];
    private times: number[] = [];
    private pause_interval: NodeJS.Timeout | null = null;
    private current_simulation_step: number = -1;

    constructor(options: SimulationOptions) {
        this.options = options;
        this.initParticles();
    }

    initParticles() {
        this.particles = this.options.particles
            ? this.options.particles?.map((particle) =>
                  createParticle(particle),
              )
            : [];
    }

    addParticle(particle: ParticleCreation) {
        this.particles.push(createParticle(particle));
    }

    stop(): SimulationOutput {
        this.stopped = true;
        this.running = false;
        return this.finish();
    }

    pause() {
        this.running = false;
        this.pause_interval = setInterval(() => {
            if (this.running) {
                clearInterval(this.pause_interval as NodeJS.Timeout);
                this.pause_interval = null;
                return;
            }
        }, 100);
    }

    resume() {
        this.running = true;
        this.run();
    }

    async run(): Promise<SimulationOutput> {
        this.stopped = false;
        this.running = true;

        const { steps, step_size } = this.options;

        for (let i = this.current_simulation_step + 1; i < steps; i++) {
            // Check if the simulation has been stopped or paused
            if (this.stopped || !this.running) {
                break;
            }

            // Save the current simulation step
            this.current_simulation_step = i;

            // Calculate the time
            const time = i * step_size;

            // Save the time
            this.times.push(time);

            // Array to store the particles at each step
            const step_particles: Particle[] = [];

            for (const particle of this.particles) {
                // Save the particle's state
                step_particles.push(
                    this.processParticleAtEachStep(particle, time, step_size),
                );
            }

            // Save the particles at each step
            this.particles_history.push(step_particles);

            // Allow the event loop to process other tasks
            await new Promise((resolve) => setImmediate(resolve));
        }

        return this.stop();
    }

    finish(): SimulationOutput {
        return {
            path: this.particles_history,
            times: this.times,
        };
    }

    processParticleAtEachStep(
        particle: Particle,
        time: number,
        step_size: number,
    ): Particle {
        // Get particle properties
        const {
            x: particle_x,
            y: particle_y,
            diffusion_coefficient,
        } = particle;

        // Save the particle position
        let x = particle_x;
        let y = particle_y;

        // Calculate the diffusion coefficient
        const D =
            typeof diffusion_coefficient === 'function'
                ? diffusion_coefficient({ particle, t: time })
                : diffusion_coefficient;

        // Calculate the variance of the normal distribution
        const variance = 2 * D * step_size;

        // Calculate the change in x and y
        const dx = randNormal(0, variance);
        const dy = randNormal(0, variance);

        // Move in the direction of the angle
        x += dx;
        y += dy;

        // Update the particle position
        particle.x = x;
        particle.y = y;

        // Calculate the distance moved
        const distance_moved = Math.sqrt(dx ** 2 + dy ** 2);

        // Update the particle distance moved
        particle.distance_moved = distance_moved;
        particle.total_distance_moved += distance_moved;

        // Calculate the velocity
        const velocity = distance_moved / step_size;

        // Update the particle velocity
        particle.velocity = velocity;

        // Returns a copy of the particle with the updated properties
        return { ...particle };
    }
}
