declare module 'brownian' {
    /**
     * @description Generates a Brownian motion path
     * @param start_x Starting x-coordinate
     * @param start_y Starting y-coordinate
     * @param steps Number of steps to take
     * @returns Array of [x, y] positions
     */
    export function brownian(
        start_x: number,
        start_y: number,
        steps: number,
    ): number[][];
}
