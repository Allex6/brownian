declare module 'brownian' {
    /**
     * @description Generates a Brownian motion path
     * @param startX Starting x-coordinate
     * @param startY Starting y-coordinate
     * @param steps Number of steps to take
     * @returns Array of [x, y] positions
     */
    export function brownian(
        startX: number,
        startY: number,
        steps: number,
    ): number[][];
}
