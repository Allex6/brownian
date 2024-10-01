import { DistanceUnit } from './distance.interface';

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
     * @description Time unit
     */
    // time: TimeUnit;
    /**
     * @description Velocity unit
     */
    // velocity: VelocityUnit;
    /**
     * @description Distance unit
     */
    distance: DistanceUnit;
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
}
