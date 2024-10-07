import { createParticle } from '../factories/particle.factory';
import { Particle, ParticleCreation } from '../interfaces/particle.interface';
import {
    SimulationInterface,
    SimulationOptions,
    SimulationOutput,
} from '../interfaces/simulation.interface';
import { randNormal } from '../utils/random.utils';

export class Simulation implements SimulationInterface {
    public running: boolean = false;
    public stopped: boolean = false;
    public particles: Particle[] = [];
    public options: SimulationOptions;

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

    stop() {
        this.stopped = true;
        this.running = false;
    }

    pause() {
        this.running = false;
    }

    resume() {
        this.running = true;
    }

    run(): SimulationOutput {
        const { steps, step_size } = this.options;
        const local_particles: Particle[][] = [];
        const times = [];

        for (let i = 0; i < steps; i++) {
            // Calculate the time
            const time = i * step_size;

            // Save the time
            times.push(time);

            // Array to store the particles at each step
            const step_particles: Particle[] = [];

            for (const particle of this.particles) {
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

                // Save the particle's state
                step_particles.push({ ...particle });
            }

            // Save the particles at each step
            local_particles.push(step_particles);
        }

        return {
            path: local_particles,
            times,
        };
    }
}
