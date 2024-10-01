# brownian - Brownian Motion Simulator in Node.js - A Simple Library for Learning and Prototyping

## Overview

> Brownian motion is the random movement of particles suspended in a fluid resulting from the impact of the fluid molecules on the particles. Brownian motion is a physical phenomenon that can be observed in dust particles suspended in a liquid, or in smoke particles in a gas.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Brownian_motion_large.gif/225px-Brownian_motion_large.gif)

For more information, please refer to the [Wikipedia](https://pt.wikipedia.org/wiki/Movimento_browniano).

This library provides a simple and easy-to-use implementation of Brownian motion in Node.js, allowing you to simulate and visualize this phenomenon intuitively. It is ideal for those who are starting to study statistical physics, computational simulation or simply want to better understand how this type of random motion works.

My goal is to learn as well! So if you find any bugs or have any suggestions for improvements, feel free to open an issue or submit a pull request. Feedback is always welcome! Also, I have some ideas for improvements and new features that I would like to implement 😁

## Installation

You can install the library via npm:

```bash
npm i brownian
```

## usage

The library provides a simple and intuitive API for simulating Brownian motion. Here is a basic usage example:

```javascript
import { brownian } from 'brownian';

// Initial position of the particle on the x-axis
const starting_x = 0;
// Initial position of the particle on the y-axis
const starting_y = 0;
// Number of steps to simulate
const n_steps = 1000;
// The distance the particle moves in each step
const step_size = 0.1;
// The unit of distance to be used in the simulation
const distance = 'centimeters';

// Simulate the Brownian motion of a particle starting at the position (0, 0) for 1000 steps on a cartesian plane
const { path, total_distance } = brownian({
    start_x: starting_x,
    start_y: starting_y,
    steps: n_steps,
    step_size: step_size,
    distance: distance,
});

console.log(path); // Shows the path of the particle on the cartesian plane
// Something like [ [0, 0], [1.2547..., 0.8648...], ... ]

console.log(total_distance); // Shows the total distance traveled by the particle
```

## Limitations

-   The library does not yet support simulations in 3 dimensions or more.
-   The library does not yet support graphical visualization of the results.
-   The current implementation is still quite simple and may not be the ideal tool for more complex simulations.
-   The current implementation may have performance issues in simulations with a large number of steps.
-   Numerical inconsistencies may occur due to the limited precision of floating-point numbers. Do not treat the results as an absolute truth! (at least for now 😅)

It is worth mentioning that the Javascript/NodeJs ecosystem is not the most suitable for extensive mathematical calculations, nor for processing/generating a large amount of data, but it is a great tool for rapid prototyping and simple testing. This is exactly why I suggest that you use this library for educational purposes and small tests, and not for complex and extensive simulations. If you want more robustness, I suggest that you use other languages ​​that are more suitable for this, such as Python for example.

If it change in the future, I will update this README accordingly (and also be very happy).

## Contributing

If you would like to contribute to the library, please follow the instructions below:

1. Fork the repository
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Roadmap (in no particular order)

-   [ ] Implement support for 3D simulations
-   [ ] Implement support for graphical visualization of the results
-   [ ] Improve the numerical precision of the simulation
-   [ ] Improve the performance of the simulation
-   [ ] Allow more complex simulations, such as particles interacting with each other, external forces, etc
-   [ ] Implement a practical application example of the library

## Goals

-   Leverage Javascript/Node.js for educational purposes on statistical physics and computational simulation
-   Provide a set of tools for prototyping and testing simple simulations using Brownian motion
-   Learn more about Brownian motion and its applications

## License

This project is licensed under the MIT license - see the [LICENSE](LICENSE) file for more details.
