import { randomBytes, getRandomValues } from 'crypto';

/**
 * @description Returns a random number in the range [a, b] (inclusive)
 */
export function rand(a: number, b: number): number {
    // Get a random 32-bit unsigned integer
    const random_value = getRandomValues(new Uint32Array(1))[0];

    // Normalize the random value to the range [0, 1]
    const normalized_value = random_value / 2 ** 32;

    // Scale the normalized value to the range [a, b]
    const scaled_value = a + Math.floor(normalized_value * (b - a + 1));
    return scaled_value;
}

/**
 * @description Generates a normally distributed random number using the Box-Muller transform
 * @param mean The mean of the distribution
 * @param stdDev The standard deviation of the distribution
 * @returns A normally distributed random number
 */
export function randNormal(mean: number, stdDev: number): number {
    let u = 0,
        v = 0;
    while (u === 0) u = randomBytes(4).readUInt32BE() / 0xffffffff; // Converte [0,1) para (0,1)
    while (v === 0) v = randomBytes(4).readUInt32BE() / 0xffffffff;
    return (
        mean +
        stdDev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
    );
}
