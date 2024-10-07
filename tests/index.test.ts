import { expect, describe, it } from 'vitest';
import { rand } from '../lib/utils/random.utils';
import { brownian } from '../lib';

describe('Browninan lib index', () => {
    it('should correctly generate a Brownian motion path with given steps number', async () => {
        const random_starting_x = rand(0, 100);
        const random_starting_y = rand(0, 100);
        const random_steps = rand(10, 100);
        const random_step_size = rand(0.01, 0.1);

        const simulation = brownian({
            particles: [
                {
                    x: random_starting_x,
                    y: random_starting_y,
                    diffusion_coefficient: 0.01,
                },
            ],
            steps: random_steps,
            step_size: random_step_size,
        });

        const { path } = await simulation.run();
        expect(path).toHaveLength(random_steps);
    });
});
