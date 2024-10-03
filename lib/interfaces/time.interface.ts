export type TimeUnit =
    | 'nanoseconds'
    | 'microseconds'
    | 'milliseconds'
    | 'seconds'
    | 'minutes'
    | 'hours';

export interface DiffusionFunctionOptions {
    /**
     * @description Particle's x-coordinate
     */
    x: number;
    /**
     * @description Particle's y-coordinate
     */
    y: number;
    /**
     * @description Time
     */
    t: number;
}

/**
 * @description A function that calculates the diffusion of a particle
 */
export type DiffusionFunction = (options: DiffusionFunctionOptions) => number;
