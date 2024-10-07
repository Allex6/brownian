import { Simulation } from './core/simulation.js';
import {
    SimulationInterface,
    SimulationOptions,
} from './interfaces/simulation.interface.js';

/**
 * @description This is just a helper function that creates a simulation object with the given params and returns it.
 */
export function brownian(options: SimulationOptions): SimulationInterface {
    const simulation = new Simulation(options);
    return simulation;
}

export { Simulation };
