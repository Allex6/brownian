import { describe, expect, it } from 'vitest';
import {
    createMultipleParticles,
    createParticle,
} from '../../lib/factories/particle.factory';

describe('Particle factory', () => {
    it('should create a single particle', () => {
        expect(
            createParticle({
                x: 0,
                y: 0,
                z: 0,
                mass: 1,
                radius: 1,
                diffusion_coefficient: 1,
            }),
        ).toEqual({
            x: 0,
            y: 0,
            z: 0,
            velocity: 0,
            diffusion_coefficient: 1,
            total_distance_moved: 0,
            distance_moved: 0,
            mass: 1,
            radius: 1,
        });
    });

    it('should create multiple particles', () => {
        expect(
            createMultipleParticles(
                {
                    x: 0,
                    y: 0,
                    z: 0,
                    mass: 1,
                    radius: 1,
                    diffusion_coefficient: 1,
                },
                10,
            ),
        ).toHaveLength(10);
    });

    it('should validate a particle mass on creation', () => {
        expect(() => {
            createParticle({
                x: 0,
                y: 0,
                z: 0,
                mass: 0,
                radius: 1,
                diffusion_coefficient: 1,
            });
        }).toThrow('Particle mass must be a number greater than 0');
    });

    it('should validate a particle x coordinate on creation', () => {
        expect(() => {
            createParticle({
                x: '0' as any,
                y: 0,
                z: 0,
                mass: 1,
                radius: 1,
                diffusion_coefficient: 1,
            });
        }).toThrow('Particle x and y coordinates must be numbers');
    });

    it('should validate a particle y coordinate on creation', () => {
        expect(() => {
            createParticle({
                x: 0,
                y: '0' as any,
                z: 0,
                mass: 1,
                radius: 1,
                diffusion_coefficient: 1,
            });
        }).toThrow('Particle x and y coordinates must be numbers');
    });

    it('should validate a particle y coordinate on creation', () => {
        expect(() => {
            createParticle({
                x: 0,
                y: 0,
                z: '0' as any,
                mass: 1,
                radius: 1,
                diffusion_coefficient: 1,
            });
        }).toThrow('Particle z coordinate must be a number');
    });
});
