/**
 * @description Returns a random number in the range [a, b] (inclusive)
 */
export function rand(a: number, b: number): number {
    // Get a random 32-bit unsigned integer
    const random_value = crypto.getRandomValues(new Uint32Array(1))[0];

    // Normalize the random value to the range [0, 1]
    const normalized_value = random_value / 2 ** 32;

    // Scale the normalized value to the range [a, b]
    const scaled_value = a + Math.floor(normalized_value * (b - a + 1));
    return scaled_value;
}
