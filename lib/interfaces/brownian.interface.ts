import { DistanceUnit } from './distance.interface';
import { DiffusionFunction } from './time.interface';

/**
 * @description Options for the Brownian motion function
 */
export interface BrownianOptions {
    /**
     * @description Starting x-coordinate
     */
    start_x: number;
    /**
     * @description Starting y-coordinate
     */
    start_y: number;
    /**
     * @description Number of steps to take
     */
    steps: number;
    /**
     * @description The distance moved in each step of the simulation, representing the magnitude of each random movement
     */
    step_size: number;
    /**
     * @description Distance unit
     */
    distance: DistanceUnit;
    /**
     * @description The diffusion coefficient, which is a measure of how particles spread out over time. This can be a number or a function that calculates the diffusion coefficient at a given time and position
     */
    diffusion_coefficient: number | DiffusionFunction;
}

/**
 * @description Output of the Brownian motion function
 */
export interface BrownianOutput {
    /**
     * @description Array of [x, y] positions
     */
    path: number[][];
    /**
     * @description Total distance moved along the path
     */
    total_distance: number;
    /**
     * @description Array of times at which the particle was at each position
     */
    times: number[];
    /**
     * @description Array of velocities at each position
     */
    velocities: number[];
}
