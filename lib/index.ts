import { Simulation } from './core/simulation.js';
import {
    SimulationInterface,
    SimulationOptions,
} from './interfaces/simulation.interface.js';

/**
 * @description This is just a helper function that creates a simulation object with the given params and returns it.
 */
export function brownian(options: SimulationOptions): SimulationInterface {
    return new Simulation(options);
}

export { Simulation };
