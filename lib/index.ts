import { rand } from './random.utils';

/**
 * @description Generates a Brownian motion path
 * @param startX Starting x-coordinate
 * @param startY Starting y-coordinate
 * @param steps Number of steps to take
 * @returns Array of [x, y] positions
 */
export function brownian(startX: number, startY: number, steps: number) {
  let x = startX;
  let y = startY;
  const positions = [];

  for (let i = 0; i < steps; i++) {
    // Get a random angle in the range [0, 2π)
    const theta = rand(0, 2 * Math.PI);
    // Move in the direction of the angle
    x += Math.cos(theta);
    y += Math.sin(theta);
    // Save the new position
    positions.push([x, y]);
  }

  return positions;
}
