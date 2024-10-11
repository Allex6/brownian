import { expect, describe, it, vi } from 'vitest';
import { brownian } from '../lib';
import { ParticleCreation } from '../lib/interfaces/particle.interface';
import { faker } from '@faker-js/faker';
import { Simulation } from '../lib';

describe('Browninan lib index', () => {
    it('should correctly generate a Brownian motion path with given steps number', async () => {
        const steps = faker.number.int({ min: 10, max: 100 });
        const random_step_size = faker.number.float({ min: 0.1, max: 1 });

        const simulation = brownian({
            particles: [createARandomParticle()],
            steps,
            step_size: random_step_size,
        });

        const { path, times } = await simulation.run();
        expect(path).toHaveLength(steps);
        expect(times).toHaveLength(steps);
    });

    it('should fail if particle mass is less than 0', async () => {
        const random_particle = createARandomParticle({ mass: -1 });
        expect(() =>
            brownian({
                particles: [random_particle],
                steps: 10,
                step_size: 0.1,
            }),
        ).toThrow();
    });

    it('should fail if we have particles with and without the z-axis', async () => {
        const random_particle = createARandomParticle({
            z: faker.number.float({ min: 0, max: 100 }),
        });
        const random_particle_without_z = createARandomParticle({
            z: undefined,
        });

        expect(() =>
            brownian({
                particles: [random_particle, random_particle_without_z],
                steps: 10,
                step_size: 0.1,
            }).run(),
        ).rejects.toThrow();
    });

    it('should fail if steps is less than 0', async () => {
        expect(() =>
            brownian({
                particles: [createARandomParticle()],
                steps: -1,
                step_size: 0.1,
            }),
        ).toThrow();
    });

    it('should fail if step_size is less than 0', async () => {
        expect(() =>
            brownian({
                particles: [createARandomParticle()],
                steps: 10,
                step_size: -1,
            }),
        ).toThrow();
    });

    it('should fail if Einstein-Stokes is defined as the diffusion coefficient equation but required properties are not set', async () => {
        expect(() =>
            brownian({
                particles: [
                    createARandomParticle({
                        mass: undefined,
                    }),
                ],
                steps: 10,
                step_size: -1,
                temperature: faker.number.float({ min: 0, max: 100 }),
                viscosity: faker.number.float({ min: 0, max: 100 }),
            }),
        ).toThrow();
    });

    it('should correctly use Einstein-Stokes equation if all properties are set', async () => {
        const particle = createARandomParticle({
            mass: faker.number.float({ min: 0.1, max: 10 }),
            radius: faker.number.float({ min: 0.1, max: 10 }),
        });

        const steps = faker.number.int({ min: 10, max: 100 });

        const simulation = brownian({
            particles: [particle],
            steps,
            step_size: faker.number.float({ min: 0.1, max: 1 }),
            temperature: faker.number.float({ min: 0, max: 100 }),
            viscosity: faker.number.float({ min: 0, max: 100 }),
            global_diffusion_coefficient: 'Einstein-Stokes',
        });

        const spy = vi.spyOn(Simulation.prototype, 'einsteinStokesEquation');

        const { path, times } = await simulation.run();

        expect(spy).toHaveBeenCalledTimes(steps);
        expect(path).toHaveLength(steps);
        expect(times).toHaveLength(steps);
    });

    it('should correctly work if we set a global diffusion coefficient as a constant', async () => {
        const particle = createARandomParticle({
            mass: faker.number.float({ min: 0.1, max: 10 }),
            radius: faker.number.float({ min: 0.1, max: 10 }),
        });

        const steps = faker.number.int({ min: 10, max: 100 });

        const simulation = brownian({
            particles: [particle],
            steps,
            step_size: faker.number.float({ min: 0.1, max: 1 }),
            global_diffusion_coefficient: faker.number.float({
                min: 0.1,
                max: 1,
            }),
        });

        const spy = vi.spyOn(Simulation.prototype, 'einsteinStokesEquation');

        const { path, times } = await simulation.run();

        expect(spy).not.toHaveBeenCalled();
        expect(path).toHaveLength(steps);
        expect(times).toHaveLength(steps);
    });

    it('should correctly work if we set a global diffusion coefficient as a function', async () => {
        const particle = createARandomParticle({
            mass: faker.number.float({ min: 0.1, max: 10 }),
            radius: faker.number.float({ min: 0.1, max: 10 }),
        });

        const steps = faker.number.int({ min: 10, max: 100 });

        const simulation = brownian({
            particles: [particle],
            steps,
            step_size: faker.number.float({ min: 0.1, max: 1 }),
            global_diffusion_coefficient: () => {
                return faker.number.float({ min: 0.1, max: 1 });
            },
        });

        const spy = vi.spyOn(Simulation.prototype, 'einsteinStokesEquation');

        const { path, times } = await simulation.run();

        expect(spy).not.toHaveBeenCalled();
        expect(path).toHaveLength(steps);
        expect(times).toHaveLength(steps);
    });

    it('should correctly work with gravity options', async () => {
        const particle = createARandomParticle({
            mass: faker.number.float({ min: 0.1, max: 10 }),
        });

        const steps = faker.number.int({ min: 10, max: 100 });

        const simulation = brownian({
            particles: [particle],
            steps,
            step_size: faker.number.float({ min: 0.1, max: 1 }),
            gravity: {
                x: 0,
                y: faker.number.float({ min: 0.1, max: 1 }),
                z: 0,
            },
        });

        const { path, times } = await simulation.run();
        expect(path).toHaveLength(steps);
        expect(times).toHaveLength(steps);
    });
});

function createARandomParticle(params: Partial<ParticleCreation> = {}) {
    return {
        x: faker.number.float({ min: 0, max: 100 }),
        y: faker.number.float({ min: 0, max: 100 }),
        diffusion_coefficient: faker.number.float({ min: 0.01, max: 0.1 }),
        mass: faker.number.float({ min: 0.1, max: 10 }),
        ...params,
    };
}
