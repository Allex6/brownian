import { expect, describe, it } from 'vitest';
import { rand } from '../../lib/utils/random.utils';

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
});
