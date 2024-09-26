/**
 * @description Returns a random number in the range [a, b] (inclusive)
 */
export function rand(a: number, b: number): number {
    // Get a random 32-bit unsigned integer
    const randomValue = crypto.getRandomValues(new Uint32Array(1))[0];

    // Normalize the random value to the range [0, 1]
    const normalizedValue = randomValue / 2 ** 32;

    // Scale the normalized value to the range [a, b]
    const scaledValue = a + Math.floor(normalizedValue * (b - a + 1));
    return scaledValue;
}
