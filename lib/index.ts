import {
    BrownianOptions,
    BrownianOutput,
} from './interfaces/brownian.interface';
import { rand } from './utils/random.utils';

/**
 * @description Generates a Brownian motion path
 */
export function brownian(options: BrownianOptions): BrownianOutput {
    const { start_x, start_y, steps } = options;

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

    return { path: positions };
}
