import {
    Particle,
    ParticleCreation,
} from '../interfaces/particle.interface.js';

/**
 * @description Build a particle at its initial state
 * @returns A particle
 */
export function createParticle(params: ParticleCreation): Particle {
    validateParticleCreation(params);

    return {
        x: params.x,
        y: params.y,
        z: params.z,
        velocity: 0,
        diffusion_coefficient: params.diffusion_coefficient,
        total_distance_moved: 0,
        distance_moved: 0,
        mass: params.mass,
        radius: params.radius,
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
    return Array.from({ length: quantity }, () => {
        validateParticleCreation(params);
        return createParticle(params);
    });
}

/**
 * @description Validate the creation of a particle
 */
function validateParticleCreation(particle: ParticleCreation) {
    const { x, y, z, mass } = particle;

    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Particle x and y coordinates must be numbers');
    }

    if (typeof z !== 'undefined' && typeof z !== 'number') {
        throw new Error('Particle z coordinate must be a number');
    }

    if (typeof mass !== 'number' || mass <= 0) {
        throw new Error('Particle mass must be a number greater than 0');
    }
}
