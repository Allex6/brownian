# Brownian Motion Simulator in Node.js - A Simple Library for Learning and Prototyping

## Overview 📚

> Brownian motion is the random movement of particles suspended in a fluid resulting from the impact of the fluid molecules on the particles. Brownian motion is a physical phenomenon that can be observed in dust particles suspended in a liquid, or in smoke particles in a gas.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Brownian_motion_large.gif/225px-Brownian_motion_large.gif)

For more information, please refer to the [Wikipedia](https://pt.wikipedia.org/wiki/Movimento_browniano).

This library provides a simple and easy-to-use implementation of Brownian motion in Node.js, allowing you to simulate and visualize this phenomenon intuitively. It is ideal for those who are starting to study statistical physics, computational simulation or simply want to better understand how this type of random motion works.

My goal is to learn as well! So if you find any bugs or have any suggestions for improvements, feel free to open an issue or submit a pull request. Feedback is always welcome! There is also a lot of new stuff coming in the next versions, so stay tuned!

## Installation 📦

You can install the library via npm:

```bash
npm i brownian
```

## usage 🚀

The library provides a simple and intuitive API for simulating Brownian motion. Here is a basic usage example using the `brownian` function. You can also import the `Simulation` class if you want to. But the `brownian` will actually create a new instance of the `Simulation` class and return it.

```javascript
import { brownian, ParticleCreation } from 'brownian';

// First we create a particle
const particle: ParticleCreation = {
    x: 0, // The starting x position of the particle
    y: 0, // The starting y position of the particle
    diffusion_coefficient: 0.1, // The diffusion coefficient of the particle. This can also be a function. Check the Diffusion Coefficient section for more information.
};

// Then we create a simulation
const simulation = brownian({
    steps: 1000, // The number of steps the simulation will run
    step_size: 0.01, // The distance moved in each step of the simulation, representing the magnitude of each random movement
    particles: [particle], // The particles of the simulation
});

// Now we run the simulation
const { path, times } = simulation.run();

// Path will be an array of arrays, where each sub-array represents the properties of each particle in the simulation at each step
// Among other properties, each sub-array will contain the x and y positions of the particle at each step, the velocity of the particle, the distance moved, and so on
console.log(path);
```

## Diffusion Coefficient 📏

The diffusion coefficient is a parameter that represents the magnitude of the random movement of the particle in each step of the simulation. The higher the diffusion coefficient, the greater the distance moved by the particle in each step. The diffusion coefficient can be a constant value or a function that returns a value. This allows you to create more complex simulations where the diffusion coefficient changes over time, for example.

You can also set a "global" diffusion coefficient for all particles in the simulation. You can do that by setting the `diffusion_coefficient` property in the `brownian` function. This will override the `diffusion_coefficient` property of each particle. Just like the particles, the `diffusion_coefficient` property can be a constant value or a function.

## Limitations and Considerations 🚧

-   Currently the library only supports 2D simulations.
-   The library does not yet support graphical visualization of the results.
-   The current implementation is still quite simple and may not be the ideal tool for more complex simulations.
-   The current implementation may have performance issues in simulations with a large number of steps and or particles.
-   Numerical inconsistencies may occur due to the limited precision of floating-point numbers. Do not treat the results as an absolute truth! (at least for now 😅)

It is worth mentioning that the Javascript/NodeJs ecosystem is not the most suitable for extensive mathematical calculations, nor for processing/generating a large amount of data, but it is a great tool for rapid prototyping and simple testing. This is exactly why I suggest that you use this library for educational purposes and small tests, and not for complex and extensive simulations. If you want more robustness, I suggest that you use other languages ​​that are more suitable for this, such as Python for example.

If it change in the future, I will update this README accordingly (and also be very happy).

## Contributing 🤝

If you would like to contribute to the library, please follow the instructions below:

1. Fork the repository
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Coming Soon (hopefully) 🚀

No order of priority:

-   Implement support for 3D simulations
-   Implement support for graphical visualization of the results
-   Improve the numerical precision of the simulation
-   Improve the performance of the simulation
-   Implement a practical application example of the library
-   Interact with the library using a CLI
-   Interactions between particles
-   Apply external forces to particles
-   Output data directly to a file
-   Allow the user to set data conversion functions to customize the output data
-   Give user more control over the simulation, such as the ability to pause, resume, and stop the simulation

## Goals 🎯

-   Leverage Javascript/Node.js for educational purposes on statistical physics and computational simulation
-   Provide a set of tools for prototyping and testing simple simulations using Brownian motion
-   Learn more about Brownian motion and its applications

## License 📜

This project is licensed under the MIT license - see the [LICENSE](LICENSE) file for more details.
