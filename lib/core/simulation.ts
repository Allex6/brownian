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
import { DiffusionEquation } from '../interfaces/time.interface.js';
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

    private readonly BOLTZMANN_CONSTANT = 1.38064852e-23;

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
                step_particles.push({
                    ...this.processParticleAtGivenStepAndTime(
                        particle,
                        time,
                        step_size,
                    ),
                });
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

    processParticleAtGivenStepAndTime(
        particle: Particle,
        time: number,
        step_size: number,
    ): Particle {
        // Get particle properties
        const { x: particle_x, y: particle_y, z: particle_z, mass } = particle;

        // Save the particle position
        let x = particle_x;
        let y = particle_y;
        let z = particle_z;

        // Calculate the diffusion coefficient
        const D = this.getDiffusionCoefficient(particle, time);

        // Calculate the variance of the normal distribution
        const variance = 2 * D * step_size;

        // calculate gravity force on each axis
        const { gravity } = this.options;
        if (gravity) {
            const { x: gx, y: gy, z: gz } = gravity;
            x += gx * mass;
            y += gy * mass;
            z = typeof z === 'number' ? z + gz * mass : undefined;
        }

        // Calculate the change in x and y
        const dx = randNormal(0, variance);
        const dy = randNormal(0, variance);
        const dz = randNormal(0, variance);

        // Move in the direction of the angle
        x += dx;
        y += dy;
        z = typeof z === 'number' ? z + dz : undefined;

        // Update the particle position
        particle.x = x;
        particle.y = y;
        particle.z = z;

        // Calculate the distance moved
        const distance_moved = Math.sqrt(
            dx ** 2 + dy ** 2 + (typeof dz === 'number' ? dz ** 2 : 0),
        );

        // Update the particle distance moved
        particle.distance_moved = distance_moved;
        particle.total_distance_moved += distance_moved;

        // Calculate the velocity
        const velocity = distance_moved / step_size;

        // Update the particle velocity
        particle.velocity = velocity;

        // Returns a copy of the particle with the updated properties
        return particle;
    }

    /**
     * @description Get the diffusion coefficient at a given time for a given particle. Calculates the global diffusion coefficient if it is defined, otherwise uses the particle's diffusion coefficient
     */
    getDiffusionCoefficient(particle: Particle, time: number): number {
        const getCoefficient = (coefficient: any) => {
            if (typeof coefficient === 'number') {
                return coefficient;
            } else if (typeof coefficient === 'string') {
                return this.getDiffusionCoefficientBasedOnEquation(
                    coefficient as DiffusionEquation,
                    particle,
                );
            } else {
                return coefficient({ particle, t: time });
            }
        };

        if (this.options.global_diffusion_coefficient) {
            return getCoefficient(this.options.global_diffusion_coefficient);
        } else {
            return getCoefficient(particle.diffusion_coefficient);
        }
    }

    /**
     * @description Get the diffusion coefficient based on the equation provided
     */
    getDiffusionCoefficientBasedOnEquation(
        equation: DiffusionEquation,
        particle: Particle,
    ): number {
        switch (equation) {
            case 'Einstein-Stokes':
                return this.einsteinStokesEquation(particle);
            default:
                return this.einsteinStokesEquation(particle);
        }
    }

    /**
     * @description Calculate the diffusion coefficient using the Einstein-Stokes equation
     */
    einsteinStokesEquation(particle: Particle): number {
        const { radius } = particle;
        const { viscosity, temperature } = this.options;

        if (
            typeof radius !== 'number' ||
            typeof viscosity !== 'number' ||
            typeof temperature !== 'number'
        ) {
            throw new Error(
                'Missing required parameters for Einstein-Stokes equation',
            );
        }

        return (
            (this.BOLTZMANN_CONSTANT * temperature) /
            (6 * Math.PI * viscosity * radius)
        );
    }
}
