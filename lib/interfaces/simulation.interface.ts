import { Particle, ParticleCreation } from './particle.interface.js';
import { DiffusionFunction } from './time.interface.js';

export interface SimulationInterface {
    /**
     * @description Array of particles for the simulation
     */
    particles: Particle[];
    /**
     * @description Simulation options
     */
    options: SimulationOptions;
    /**
     * @description Add a particle to the simulation
     * @param particle Particle to add
     */
    addParticle: (particle: ParticleCreation) => void;
    /**
     * @description Whether the simulation is running
     */
    running: boolean;
    /**
     * @description Whether the simulation is permanently stopped
     */
    stopped: boolean;
    /**
     * @description Run the simulation and return the output
     * @returns Particles and their paths during the simulation, along with the times at each step
     */
    run: () => Promise<SimulationOutput>;
    /**
     * @description Stop the simulation if it is running
     */
    stop: () => void;
    /**
     * @description Pause the simulation
     */
    pause: () => void;
    /**
     * @description Resume the simulation
     */
    resume: () => void;
}

export interface SimulationOptions {
    /**
     * @description Number of steps to take
     */
    steps: number;
    /**
     * @description The distance moved in each step of the simulation, representing the magnitude of each random movement
     */
    step_size: number;
    /**
     * @description Particles to be created at the start of the simulation
     */
    particles?: ParticleCreation[];
    /**
     * @description The diffusion coefficient, which is a measure of how particles spread out over time. This can be a number or a function that calculates the diffusion coefficient at a given time and position
     */
    general_diffusion_coefficient?: number | DiffusionFunction;
}

export interface SimulationOutput {
    /**
     * @description Array of paths for each particle during the simulation
     */
    path: Particle[][];
    /**
     * @description Array containing the times in each step of the simulation
     */
    times: number[];
}
