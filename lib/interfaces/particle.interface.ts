import { DiffusionFunction } from './time.interface.js';

export interface Particle {
    /**
     * @description Particle's x-coordinate
     */
    x: number;
    /**
     * @description Particle's y-coordinate
     */
    y: number;
    /**
     * @description Particle's z-coordinate
     */
    z?: number;
    /**
     * @description Particle's instantaneous velocity
     */
    velocity: number;
    /**
     * @description The diffusion coefficient, which is a measure of how the particle spreads out over time. This can be a number or a function that calculates the diffusion coefficient at a given time and position
     */
    diffusion_coefficient: number | DiffusionFunction;
    /**
     * @description The total distance moved by the particle so far in the simulation
     */
    total_distance_moved: number;
    /**
     * @description The distance moved by the particle in comparison to the previous step
     */
    distance_moved: number;
    /**
     * @description The mass of the particle
     */
    mass: number;
}

export type ParticleCreation = Omit<
    Particle,
    'velocity' | 'total_distance_moved' | 'distance_moved'
>;
