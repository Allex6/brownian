import { Particle } from './particle.interface.js';

export interface DiffusionFunctionOptions {
    /**
     * @description Particle's information
     */
    particle: Particle;
    /**
     * @description Time
     */
    t: number;
}

/**
 * @description A function that calculates the diffusion of a particle
 */
export type DiffusionFunction = (options: DiffusionFunctionOptions) => number;

/**
 * @description The diffusion equation that should be used to calculate the diffusion of particles
 */
export type DiffusionEquation = 'Einstein-Stokes';
