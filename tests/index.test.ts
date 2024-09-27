import { expect, describe, it } from 'vitest';
import { rand } from '../lib/utils/random.utils';
import { brownian } from '../lib';

describe('Browninan lib index', () => {
    it('should correctly generate a Brownian motion path', () => {
        const random_starting_x = rand(0, 100);
        const random_starting_y = rand(0, 100);
        const random_steps = rand(10, 100);
        const bmp = brownian(
            random_starting_x,
            random_starting_y,
            random_steps,
        );

        expect(bmp).toHaveLength(random_steps);
        expect(bmp[0]).toEqual([random_starting_x, random_starting_y]);
    });
});
