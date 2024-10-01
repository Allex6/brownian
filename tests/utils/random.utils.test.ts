import { expect, describe, it } from 'vitest';
import { rand, randNormal } from '../../lib/utils/random.utils';

describe('Random utils', () => {
    it('should generate an inclusive random number given a range', () => {
        const range_start = 0;
        const range_end = 2;
        const result = rand(range_start, range_end);
        expect(result).toBeGreaterThanOrEqual(range_start);
        expect(result).toBeLessThanOrEqual(range_end);
    });

    it('should work with negative values', () => {
        const range_start = -2;
        const range_end = 0;
        const result = rand(range_start, range_end);
        expect(result).toBeGreaterThanOrEqual(range_start);
        expect(result).toBeLessThanOrEqual(range_end);
    });

    it('should correctly generate a normally distributed random number', () => {
        const mean = 0;
        const stdDev = 1;
        const result = randNormal(mean, stdDev);
        expect(result).toBeTypeOf('number');
    });
});
