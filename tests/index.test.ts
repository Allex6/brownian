import { expect, describe, it } from 'vitest';
import { rand } from '../lib/utils/random.utils';
import { brownian } from '../lib';
import { DistanceUnit } from '../lib/interfaces/distance.interface';

describe('Browninan lib index', () => {
    it('should correctly generate a Brownian motion path', () => {
        const random_starting_x = rand(0, 100);
        const random_starting_y = rand(0, 100);
        const random_steps = rand(10, 100);
        const random_step_size = rand(0.01, 0.1);

        const { path } = brownian({
            start_x: random_starting_x,
            start_y: random_starting_y,
            steps: random_steps,
            step_size: random_step_size,
            distance: [
                'millimeters' as DistanceUnit,
                'centimeters' as DistanceUnit,
                'meters' as DistanceUnit,
            ][rand(0, 2)],
        });

        expect(path).toHaveLength(random_steps);
        expect(path[0]).toEqual([random_starting_x, random_starting_y]);
    });
});
