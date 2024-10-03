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
    const {
        start_x,
        start_y,
        steps,
        distance,
        step_size,
        diffusion_coefficient,
    } = options;
    const distance_matrix = setDistance(distance);

    let x = start_x;
    let y = start_y;
    const positions = [[x, y]];
    const times = [0];
    const velocities = [];
    let total_distance = 0;

    for (let i = 1; i < steps; i++) {
        // Calculate the time
        const time = i * step_size;

        // Calculate the diffusion coefficient
        const D =
            typeof diffusion_coefficient === 'function'
                ? diffusion_coefficient({ x, y, t: time })
                : diffusion_coefficient;

        // Calculate the variance of the normal distribution
        const variance = 2 * D * step_size;

        // Calculate the change in x and y
        const dx = randNormal(0, variance);
        const dy = randNormal(0, variance);

        // Move in the direction of the angle
        x += dx;
        y += dy;

        // Calculate the distance moved
        const distance_moved = Math.sqrt(dx ** 2 + dy ** 2);

        // Calculate the velocity
        const velocity = distance_moved / step_size;

        // Update the total distance
        total_distance += distance_moved;

        // Save the new position
        positions.push([x, y]);

        // Save the time
        times.push(time);

        // Save the velocity
        velocities.push(velocity);
    }

    return {
        path: positions,
        total_distance: total_distance * distance_matrix[distance],
        times,
        velocities,
    };
}
