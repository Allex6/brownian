import {
    Particle,
    ParticleCreation,
} from '../interfaces/particle.interface.js';

/**
 * @description Build a particle at its initial state
 * @returns A particle
 */
export function createParticle(params: ParticleCreation): Particle {
    return {
        x: params.x,
        y: params.y,
        velocity: 0,
        diffusion_coefficient: params.diffusion_coefficient,
        total_distance_moved: 0,
        distance_moved: 0,
    };
}

/**
 * @description Create multiple clones of a particle with the same properties
 * @returns An array of particles
 */
export function createMultipleParticles(
    params: ParticleCreation,
    quantity: number,
): Particle[] {
    return Array.from({ length: quantity }, () => createParticle(params));
}
