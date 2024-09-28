declare module 'brownian' {
    /**
     * @description Generates a Brownian motion path
     */
    export function brownian(options: BrownianOptions): number[][];

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
         * @description Time step between each step
         */
        time_step: number;
    }

    /**
     * @description Output of the Brownian motion function
     */
    export interface BrownianOutput {
        /**
         * @description Array of [x, y] positions
         */
        path: number[][];
    }
}
