import { setDistance } from './config/set-si.config';
import {
    BrownianOptions,
    BrownianOutput,
} from './interfaces/brownian.interface';
import { randNormal } from './utils/random.utils';

/**
 * @description Generates a Brownian motion path
 */
export function brownian(options: BrownianOptions): BrownianOutput {
    const { start_x, start_y, steps, distance, step_size } = options;
    const distance_matrix = setDistance(distance);

    let x = start_x;
    let y = start_y;
    const positions = [[x, y]];
    let total_distance = 0;

    for (let i = 1; i < steps; i++) {
        // Calculate the change in x and y
        const dx = randNormal(0, step_size);
        const dy = randNormal(0, step_size);
        // Move in the direction of the angle
        x += dx;
        y += dy;

        // Calculate the distance moved
        const distance_moved = Math.sqrt(dx ** 2 + dy ** 2);
        // Update the total distance
        total_distance += distance_moved;

        // Save the new position
        positions.push([x, y]);
    }

    return {
        path: positions,
        total_distance: total_distance * distance_matrix[distance],
    };
}
