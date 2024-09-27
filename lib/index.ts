import { rand } from './utils/random.utils';

/**
 * @description Generates a Brownian motion path
 * @param start_x Starting x-coordinate
 * @param start_y Starting y-coordinate
 * @param steps Number of steps to take
 * @returns Array of [x, y] positions
 */
export function brownian(start_x: number, start_y: number, steps: number) {
    let x = start_x;
    let y = start_y;
    const positions = [[x, y]];

    for (let i = 1; i < steps; i++) {
        // Get a random angle in the range [0, 2π)
        const theta = rand(0, 2 * Math.PI);
        // Move in the direction of the angle
        x += Math.cos(theta);
        y += Math.sin(theta);
        // Save the new position
        positions.push([x, y]);
    }

    return positions;
}
