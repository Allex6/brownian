# Brownian Motion Simulator in Node.js - A Simple Library for Learning and Prototyping

## Overview 📚

> Brownian motion is the random movement of particles suspended in a fluid resulting from the impact of the fluid molecules on the particles. Brownian motion is a physical phenomenon that can be observed in dust particles suspended in a liquid, or in smoke particles in a gas.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Brownian_motion_large.gif/225px-Brownian_motion_large.gif)

For more information, please refer to the [Wikipedia](https://pt.wikipedia.org/wiki/Movimento_browniano).

This library provides a simple and easy-to-use implementation of Brownian motion in Node.js, allowing you to simulate and visualize this phenomenon intuitively. I suggest using this library for educational purposes, small tests, and prototyping.

My goal is to learn as well! So if you find any bugs or have any suggestions for improvements, feel free to open an issue or submit a pull request. Feedback is always welcome!

## Features 🎉

-   Simulate Brownian motion in 2D and 3D using a normal distribution
    -   The normal distribution is used to generate random numbers that represent the magnitude of the random movement of the particles
    -   To simulate the random movement on a 2D plane, just omit the `z` property of the particle
-   Simulate the effect of gravity on the particles
-   Calculate the diffusion coefficient using the Einstein-Stokes equation
-   Simulate the effect of temperature and viscosity on the diffusion coefficient
-   Provide a fully customizable API for creating and controlling the diffusion of particles
-   Calculate the distance moved by the particles in each step
-   Calculate the total distance moved by the particles in the simulation
-   Calculate the velocity of the particles

This covers the basic of brownian motion simulation. If you have any suggestions for new features, please let me know!

## Installation 📦

You can install the library via npm:

```bash
npm i brownian
```

## Usage 🚀

The library provides a simple and intuitive API for simulating Brownian motion. Here is a basic usage example using the `brownian` function. You can also import the `Simulation` class if you want to. But the `brownian` will actually create a new instance of the `Simulation` class and return it.

```javascript
import { brownian, ParticleCreation } from 'brownian';

// First we create a particle
const particle: ParticleCreation = {
    x: 0, // The starting x position of the particle
    y: 0, // The starting y position of the particle
    z: 0, // The starting z position of the particle. If you just want a 2D simulation, you can omit this property
    diffusion_coefficient: 0.1, // The diffusion coefficient of the particle. This can also be a function. Check the Diffusion Coefficient section for more information.
    mass: 1, // The mass of the particle. This is used to calculate the force of gravity acting on the particle
};

// Then we create a simulation
const simulation = brownian({
    steps: 1000, // The number of steps the simulation will run
    step_size: 0.01, // The distance moved in each step of the simulation, representing the magnitude of each random movement
    particles: [particle], // The particles of the simulation
    gravity: { x: 0, y: -9.8, z: 0 }, // The force of gravity acting on the particles
});

// Now we run the simulation
const { path, times } = await simulation.run();

// Path will be an array of arrays, where each sub-array represents the properties of each particle in the simulation at each step
// Among other properties, each sub-array will contain the x and y positions of the particle at each step, the velocity of the particle, the distance moved, and so on
console.log(path);
```

## Diffusion Coefficient 📏

The diffusion coefficient is a parameter that represents the magnitude of the random movement of the particle in each step of the simulation. The higher the diffusion coefficient, the greater the distance moved by the particle in each step. The diffusion coefficient can be a constant value, a function that returns a value, or a predefined string that represents a common value. So far we have just one predefined string, which is `'Einstein-Stokes'`. This string represents the value of the diffusion coefficient according to the Einstein-Stokes equation, which is given by `D = k * T / (6 * pi * eta * r)`, where `D` is the diffusion coefficient, `k` is the Boltzmann constant, `T` is the temperature of the fluid, `eta` is the viscosity of the fluid, and `r` is the radius of the particle. The Einstein-Stokes equation is a theoretical model that describes the diffusion of particles in a fluid. The value of the diffusion coefficient calculated by the Einstein-Stokes equation is usually in the order of `10^-9` to `10^-11` m²/s.

You can also set a "global" diffusion coefficient for all particles in the simulation. You can do that by setting the `diffusion_coefficient` property in the `brownian` function. This will override the `diffusion_coefficient` property of each particle. Just like the particles, the `diffusion_coefficient` property can be a constant value, a function that returns a value, or a predefined string.

## Gravity 🌌

You can also simulate the effect of gravity on the particles. To do this, you can set the `gravity` property in the `brownian` function. The `gravity` property is an object with the following properties:

-   x: The force of gravity in the x direction
-   y: The force of gravity in the y direction
-   z: The force of gravity in the z direction

Each particle has now a `mass` property that represents the mass of the particle. The mass of the particle is used to calculate the force of gravity acting on the particle. Just be aware of the unit conversion. The force of gravity is calculated using the formula `F = m * g`, where `F` is the force of gravity, `m` is the mass of the particle, and `g` is the acceleration due to gravity. When providing such values, be sure to use the correct units. For example, if you want to simulate the force of gravity acting on a particle with a mass of 1 kg, you should set the `mass` property of the particle to 1 and the `gravity` property of the simulation to 9.8 (assuming the acceleration due to gravity is 9.8 m/s²).

## Particle's Properties 🧪

Each particle in the simulation has the following properties:

-   **x:** The x position of the particle
-   **y:** The y position of the particle
-   **z:** The z position of the particle
    -   Optional for 2D simulations
-   **velocity:** Particle's instantaneous velocity
    -   Optional on creation
-   **mass:** The mass of the particle
-   **diffusion_coefficient:** The diffusion coefficient of the particle
-   **radius:** The radius of the particle
    -   Optional. You can set the radius of the particle if you want to use the Einstein-Stokes equation to calculate the diffusion coefficient
-   **distance_moved:** The distance moved by the particle in the last step
    -   Dinamically updated by the simulation
-   **total_distance_moved:** The total distance moved by the particle in the simulation
    -   Dinamically updated by the simulation

## Simulation Configuration 🛠️

The `brownian` function accepts an object with the following properties:

-   **steps:** The number of steps the simulation will run
-   **step_size:** The distance moved in each step of the simulation, representing the magnitude of each random movement
-   **particles:** An array of particles that will be simulated
-   **global_diffusion_coefficient:** The diffusion coefficient of the particles
    -   Optional. If set, it will override the `diffusion_coefficient` property of each particle
-   **gravity:** An object representing the force of gravity acting on the particles
    -   Optional. If set, it will simulate the effect of gravity on the particles
-   **temperature:** The temperature of the fluid
    -   Optional. If set, it will affect the diffusion coefficient of the particles
-   **viscosity:** The viscosity of the fluid
    -   Optional. If set, it will affect the diffusion coefficient of the particles

## Simulation Controls 🎮

You can have full control over the simulation by using the following methods:

-   **run:** Run the simulation
    -   It's an async function that returns an object with the simulation results. If you run it without the `await` keyword, you will have more control over the simulation, as you can pause, resume, and stop it.
-   **pause:** Pause the simulation
-   **resume:** Resume the simulation
-   **stop:** Stop the simulation and return the results
-   **finish:** Finish the simulation and return the results. This method is automatically called when the simulation reaches the last step or you call the `stop` method.

## Limitations and Considerations 🚧

-   The library does not yet support graphical visualization of the results.
-   The current implementation is still quite simple and may not be the ideal tool for more complex simulations.
-   The current implementation may have performance issues in simulations with a large number of steps and or particles.
-   Numerical inconsistencies may occur due to the limited precision of floating-point numbers. Do not treat the results as an absolute truth! (at least for now 😅)
-   The library is well suited for simulating the brownian motion on liquids and gases. Don't use it to simulate the brownian motion on solids, as the simulation does not take into account the interactions between the particles and the solid surface, besides others factors.

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

-   Implement support for graphical visualization of the results
-   Improve the numerical precision of the simulation
-   Improve the performance of the simulation
-   Implement a practical application example of the library
-   Interact with the library using a CLI
-   Output data directly to a file
-   Allow the user to set data conversion functions to customize the output data

## Goals 🎯

-   Leverage Javascript/Node.js for educational purposes on statistical physics and computational simulation
-   Provide a set of tools for prototyping and testing simple simulations using Brownian motion
-   Learn more about Brownian motion and its applications

## License 📜

This project is licensed under the MIT license - see the [LICENSE](LICENSE) file for more details.
