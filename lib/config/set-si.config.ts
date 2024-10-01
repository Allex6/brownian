import { DistanceUnit } from '../interfaces/distance.interface';
import { SIDistance, SITime, SIVelocity } from '../interfaces/si.interface';
import { TimeUnit } from '../interfaces/time.interface';
import { VelocityUnit } from '../interfaces/velocity.interface';

/**
 * @description Set the distance unit
 * @returns Conversion factors for the distance unit
 */
export function setDistance(distance: DistanceUnit): SIDistance {
    switch (distance) {
        case 'centimeters':
            return {
                centimeters: 1,
                millimeters: 10,
                meters: 0.01,
            };
        case 'meters':
            return {
                centimeters: 100,
                millimeters: 1000,
                meters: 1,
            };
        case 'millimeters':
            return {
                centimeters: 0.1,
                millimeters: 1,
                meters: 0.001,
            };
        default:
            throw new Error('Invalid distance unit');
    }
}

/**
 * @description Set the time unit
 * @returns Conversion factors for the time unit
 */
export function setTime(time: TimeUnit): SITime {
    switch (time) {
        case 'nanoseconds':
            return {
                nanoseconds: 1,
                microseconds: 0.001,
                milliseconds: 1e-6,
                seconds: 1e-9,
                minutes: 1.6666666666666667e-11,
                hours: 2.777777777777778e-13,
            };
        case 'microseconds':
            return {
                nanoseconds: 1000,
                microseconds: 1,
                milliseconds: 0.001,
                seconds: 1e-6,
                minutes: 1.6666666666666667e-8,
                hours: 2.777777777777778e-10,
            };
        case 'milliseconds':
            return {
                nanoseconds: 1e6,
                microseconds: 1000,
                milliseconds: 1,
                seconds: 0.001,
                minutes: 1.6666666666666667e-5,
                hours: 2.777777777777778e-7,
            };
        case 'seconds':
            return {
                nanoseconds: 1e9,
                microseconds: 1e6,
                milliseconds: 1000,
                seconds: 1,
                minutes: 0.016666666666666666,
                hours: 0.0002777777777777778,
            };
        case 'minutes':
            return {
                nanoseconds: 6e10,
                microseconds: 6e7,
                milliseconds: 60000,
                seconds: 60,
                minutes: 1,
                hours: 0.016666666666666666,
            };
        case 'hours':
            return {
                nanoseconds: 3.6e12,
                microseconds: 3.6e9,
                milliseconds: 3.6e6,
                seconds: 3600,
                minutes: 60,
                hours: 1,
            };
        default:
            throw new Error('Invalid time unit');
    }
}

/**
 * @description Set the velocity unit
 * @returns Conversion factors for the velocity unit
 */
export function setVelocity(velocity: VelocityUnit): SIVelocity {
    switch (velocity) {
        case 'centimeters_per_hour':
            return {
                centimeters_per_hour: 1,
                centimeters_per_microsecond: 0.0002777777777777778,
                centimeters_per_millisecond: 0.000016666666666666666,
                centimeters_per_minute: 0.016666666666666666,
                centimeters_per_nanosecond: 2.777777777777778e-10,
                centimeters_per_second: 0.0002777777777777778,
                meters_per_hour: 0.01,
                meters_per_microsecond: 2.777777777777778e-8,
                meters_per_millisecond: 1.6666666666666667e-9,
                meters_per_minute: 1.6666666666666667e-5,
                meters_per_nanosecond: 2.777777777777778e-14,
                meters_per_second: 2.777777777777778e-7,
                milimeters_per_hour: 10,
                milimeters_per_microsecond: 0.002777777777777778,
                milimeters_per_millisecond: 0.00016666666666666666,
                milimeters_per_minute: 0.16666666666666666,
                milimeters_per_nanosecond: 2.777777777777778e-7,
                milimeters_per_second: 0.002777777777777778,
            };
        case 'centimeters_per_microsecond':
            return {
                centimeters_per_hour: 3600000,
                centimeters_per_microsecond: 1,
                centimeters_per_millisecond: 0.06,
                centimeters_per_minute: 60000,
                centimeters_per_nanosecond: 1e4,
                centimeters_per_second: 1000000,
                meters_per_hour: 360,
                meters_per_microsecond: 0.0001,
                meters_per_millisecond: 0.006,
                meters_per_minute: 60,
                meters_per_nanosecond: 1e-5,
                meters_per_second: 0.1,
                milimeters_per_hour: 360000,
                milimeters_per_microsecond: 100,
                milimeters_per_millisecond: 6,
                milimeters_per_minute: 6000,
                milimeters_per_nanosecond: 1e3,
                milimeters_per_second: 1000,
            };
        case 'centimeters_per_millisecond':
            return {
                centimeters_per_hour: 60000,
                centimeters_per_microsecond: 16.666666666666668,
                centimeters_per_millisecond: 1,
                centimeters_per_minute: 1000,
                centimeters_per_nanosecond: 16666.666666666668,
                centimeters_per_second: 1000,
                meters_per_hour: 60,
                meters_per_microsecond: 0.016666666666666666,
                meters_per_millisecond: 0.001,
                meters_per_minute: 1,
                meters_per_nanosecond: 1666.6666666666667,
                meters_per_second: 1,
                milimeters_per_hour: 60000,
                milimeters_per_microsecond: 16.666666666666668,
                milimeters_per_millisecond: 1,
                milimeters_per_minute: 1000,
                milimeters_per_nanosecond: 16666.666666666668,
                milimeters_per_second: 1000,
            };
        case 'centimeters_per_minute':
            return {
                centimeters_per_hour: 60,
                centimeters_per_microsecond: 0.016666666666666666,
                centimeters_per_millisecond: 0.001,
                centimeters_per_minute: 1,
                centimeters_per_nanosecond: 1666.6666666666667,
                centimeters_per_second: 1,
                meters_per_hour: 0.06,
                meters_per_microsecond: 1.6666666666666667e-5,
                meters_per_millisecond: 1e-6,
                meters_per_minute: 1e-2,
                meters_per_nanosecond: 1.6666666666666667,
                meters_per_second: 0.01,
                milimeters_per_hour: 60,
                milimeters_per_microsecond: 0.016666666666666666,
                milimeters_per_millisecond: 0.001,
                milimeters_per_minute: 1,
                milimeters_per_nanosecond: 1666.6666666666667,
                milimeters_per_second: 1,
            };
        case 'centimeters_per_nanosecond':
            return {
                centimeters_per_hour: 36000000000000,
                centimeters_per_microsecond: 10000,
                centimeters_per_millisecond: 600,
                centimeters_per_minute: 600000000,
                centimeters_per_nanosecond: 1,
                centimeters_per_second: 1000000,
                meters_per_hour: 36000000000,
                meters_per_microsecond: 100,
                meters_per_millisecond: 6,
                meters_per_minute: 60000000,
                meters_per_nanosecond: 0.0001,
                meters_per_second: 1000,
                milimeters_per_hour: 36000000000000,
                milimeters_per_microsecond: 10000000,
                milimeters_per_millisecond: 600000,
                milimeters_per_minute: 600000000,
                milimeters_per_nanosecond: 10000,
                milimeters_per_second: 1000000,
            };
        case 'centimeters_per_second':
            return {
                centimeters_per_hour: 3600,
                centimeters_per_microsecond: 1,
                centimeters_per_millisecond: 0.06,
                centimeters_per_minute: 60,
                centimeters_per_nanosecond: 10000,
                centimeters_per_second: 100,
                meters_per_hour: 3.6,
                meters_per_microsecond: 0.001,
                meters_per_millisecond: 0.06,
                meters_per_minute: 0.06,
                meters_per_nanosecond: 100,
                meters_per_second: 1,
                milimeters_per_hour: 36000,
                milimeters_per_microsecond: 10,
                milimeters_per_millisecond: 600,
                milimeters_per_minute: 600,
                milimeters_per_nanosecond: 100000,
                milimeters_per_second: 1000,
            };
        case 'meters_per_hour':
            return {
                centimeters_per_hour: 100,
                centimeters_per_microsecond: 0.00002777777777777778,
                centimeters_per_millisecond: 0.0000016666666666666668,
                centimeters_per_minute: 0.16666666666666666,
                centimeters_per_nanosecond: 2.777777777777778e-11,
                centimeters_per_second: 0.0002777777777777778,
                meters_per_hour: 1,
                meters_per_microsecond: 2.777777777777778e-9,
                meters_per_millisecond: 1.6666666666666667e-10,
                meters_per_minute: 0.016666666666666666,
                meters_per_nanosecond: 2.777777777777778e-14,
                meters_per_second: 2.777777777777778e-7,
                milimeters_per_hour: 1000,
                milimeters_per_microsecond: 0.0002777777777777778,
                milimeters_per_millisecond: 0.000016666666666666666,
                milimeters_per_minute: 0.016666666666666666,
                milimeters_per_nanosecond: 2.777777777777778e-7,
                milimeters_per_second: 0.002777777777777778,
            };
        case 'meters_per_microsecond':
            return {
                centimeters_per_hour: 360000000,
                centimeters_per_microsecond: 100,
                centimeters_per_millisecond: 6,
                centimeters_per_minute: 60000000,
                centimeters_per_nanosecond: 10000000,
                centimeters_per_second: 1000000,
                meters_per_hour: 3600,
                meters_per_microsecond: 1,
                meters_per_millisecond: 0.06,
                meters_per_minute: 60,
                meters_per_nanosecond: 10000,
                meters_per_second: 1000,
                milimeters_per_hour: 3600000,
                milimeters_per_microsecond: 1000,
                milimeters_per_millisecond: 60,
                milimeters_per_minute: 60000,
                milimeters_per_nanosecond: 1000000,
                milimeters_per_second: 100000,
            };
        case 'meters_per_millisecond':
            return {
                centimeters_per_hour: 3600000,
                centimeters_per_microsecond: 1000,
                centimeters_per_millisecond: 60,
                centimeters_per_minute: 600000,
                centimeters_per_nanosecond: 100000,
                centimeters_per_second: 10000,
                meters_per_hour: 360,
                meters_per_microsecond: 0.1,
                meters_per_millisecond: 0.006,
                meters_per_minute: 60,
                meters_per_nanosecond: 10000,
                meters_per_second: 1,
                milimeters_per_hour: 3600000,
                milimeters_per_microsecond: 1000,
                milimeters_per_millisecond: 60,
                milimeters_per_minute: 600000,
                milimeters_per_nanosecond: 100000,
                milimeters_per_second: 10000,
            };
        case 'meters_per_minute':
            return {
                centimeters_per_hour: 6000,
                centimeters_per_microsecond: 1.6666666666666667,
                centimeters_per_millisecond: 0.1,
                centimeters_per_minute: 1000,
                centimeters_per_nanosecond: 166666.66666666666,
                centimeters_per_second: 100,
                meters_per_hour: 60,
                meters_per_microsecond: 0.016666666666666666,
                meters_per_millisecond: 0.001,
                meters_per_minute: 1,
                meters_per_nanosecond: 166.66666666666666,
                meters_per_second: 0.1,
                milimeters_per_hour: 60000,
                milimeters_per_microsecond: 16.666666666666668,
                milimeters_per_millisecond: 1,
                milimeters_per_minute: 1000,
                milimeters_per_nanosecond: 166666.66666666666,
                milimeters_per_second: 100,
            };
        case 'meters_per_nanosecond':
            return {
                centimeters_per_hour: 360000000000,
                centimeters_per_microsecond: 100000,
                centimeters_per_millisecond: 6000,
                centimeters_per_minute: 600000000,
                centimeters_per_nanosecond: 10,
                centimeters_per_second: 1000000,
                meters_per_hour: 360000000,
                meters_per_microsecond: 100000,
                meters_per_millisecond: 6000,
                meters_per_minute: 60000000,
                meters_per_nanosecond: 1,
                meters_per_second: 1000,
                milimeters_per_hour: 360000000000,
                milimeters_per_microsecond: 100000000,
                milimeters_per_millisecond: 6000000,
                milimeters_per_minute: 600000000,
                milimeters_per_nanosecond: 100,
                milimeters_per_second: 100000,
            };
        case 'meters_per_second':
            return {
                centimeters_per_hour: 360000,
                centimeters_per_microsecond: 100,
                centimeters_per_millisecond: 6,
                centimeters_per_minute: 60000,
                centimeters_per_nanosecond: 10000000,
                centimeters_per_second: 10000,
                meters_per_hour: 3600,
                meters_per_microsecond: 1,
                meters_per_millisecond: 0.06,
                meters_per_minute: 60,
                meters_per_nanosecond: 10000,
                meters_per_second: 1000,
                milimeters_per_hour: 3600000,
                milimeters_per_microsecond: 1000,
                milimeters_per_millisecond: 60,
                milimeters_per_minute: 60000,
                milimeters_per_nanosecond: 1000000,
                milimeters_per_second: 100000,
            };
        case 'milimeters_per_hour':
            return {
                centimeters_per_hour: 10,
                centimeters_per_microsecond: 0.002777777777777778,
                centimeters_per_millisecond: 0.00016666666666666666,
                centimeters_per_minute: 0.16666666666666666,
                centimeters_per_nanosecond: 2.777777777777778e-7,
                centimeters_per_second: 0.002777777777777778,
                meters_per_hour: 0.001,
                meters_per_microsecond: 2.777777777777778e-9,
                meters_per_millisecond: 1.6666666666666667e-10,
                meters_per_minute: 1.6666666666666667e-5,
                meters_per_nanosecond: 2.777777777777778e-14,
                meters_per_second: 2.777777777777778e-7,
                milimeters_per_hour: 1,
                milimeters_per_microsecond: 0.0002777777777777778,
                milimeters_per_millisecond: 0.000016666666666666666,
                milimeters_per_minute: 0.016666666666666666,
                milimeters_per_nanosecond: 2.777777777777778e-7,
                milimeters_per_second: 0.002777777777777778,
            };
        case 'milimeters_per_microsecond':
            return {
                centimeters_per_hour: 36000000,
                centimeters_per_microsecond: 10000,
                centimeters_per_millisecond: 600,
                centimeters_per_minute: 6000000,
                centimeters_per_nanosecond: 1000000,
                centimeters_per_second: 100000,
                meters_per_hour: 360000,
                meters_per_microsecond: 100,
                meters_per_millisecond: 6,
                meters_per_minute: 6000,
                meters_per_nanosecond: 1000,
                meters_per_second: 1000,
                milimeters_per_hour: 36000,
                milimeters_per_microsecond: 10,
                milimeters_per_millisecond: 0.6,
                milimeters_per_minute: 600,
                milimeters_per_nanosecond: 100,
                milimeters_per_second: 100,
            };
        case 'milimeters_per_millisecond':
            return {
                centimeters_per_hour: 360000,
                centimeters_per_microsecond: 100,
                centimeters_per_millisecond: 6,
                centimeters_per_minute: 60000,
                centimeters_per_nanosecond: 10000,
                centimeters_per_second: 1000,
                meters_per_hour: 360,
                meters_per_microsecond: 0.1,
                meters_per_millisecond: 0.006,
                meters_per_minute: 60,
                meters_per_nanosecond: 10,
                meters_per_second: 1,
                milimeters_per_hour: 360,
                milimeters_per_microsecond: 0.1,
                milimeters_per_millisecond: 0.006,
                milimeters_per_minute: 60,
                milimeters_per_nanosecond: 10,
                milimeters_per_second: 1,
            };
        case 'milimeters_per_minute':
            return {
                centimeters_per_hour: 600,
                centimeters_per_microsecond: 0.16666666666666666,
                centimeters_per_millisecond: 0.01,
                centimeters_per_minute: 1000,
                centimeters_per_nanosecond: 166.66666666666666,
                centimeters_per_second: 100,
                meters_per_hour: 0.06,
                meters_per_microsecond: 1.6666666666666667e-5,
                meters_per_millisecond: 1e-6,
                meters_per_minute: 1e-2,
                meters_per_nanosecond: 1.6666666666666667,
                meters_per_second: 0.01,
                milimeters_per_hour: 60,
                milimeters_per_microsecond: 0.016666666666666666,
                milimeters_per_millisecond: 0.001,
                milimeters_per_minute: 1,
                milimeters_per_nanosecond: 166.66666666666666,
                milimeters_per_second: 100,
            };
        case 'milimeters_per_nanosecond':
            return {
                centimeters_per_hour: 36000000000,
                centimeters_per_microsecond: 10000,
                centimeters_per_millisecond: 600,
                centimeters_per_minute: 600000000,
                centimeters_per_nanosecond: 1,
                centimeters_per_second: 1000000,
                meters_per_hour: 36000000,
                meters_per_microsecond: 10000,
                meters_per_millisecond: 600,
                meters_per_minute: 600000,
                meters_per_nanosecond: 0.0001,
                meters_per_second: 1000,
                milimeters_per_hour: 36000000000,
                milimeters_per_microsecond: 10000,
                milimeters_per_millisecond: 600,
                milimeters_per_minute: 600000000,
                milimeters_per_nanosecond: 1,
                milimeters_per_second: 1000,
            };
        case 'milimeters_per_second':
            return {
                centimeters_per_hour: 360000,
                centimeters_per_microsecond: 100,
                centimeters_per_millisecond: 6,
                centimeters_per_minute: 60000,
                centimeters_per_nanosecond: 10000,
                centimeters_per_second: 1000,
                meters_per_hour: 360,
                meters_per_microsecond: 0.1,
                meters_per_millisecond: 0.006,
                meters_per_minute: 60,
                meters_per_nanosecond: 10,
                meters_per_second: 1,
                milimeters_per_hour: 360,
                milimeters_per_microsecond: 0.1,
                milimeters_per_millisecond: 0.006,
                milimeters_per_minute: 60,
                milimeters_per_nanosecond: 10,
                milimeters_per_second: 1,
            };
        default:
            throw new Error('Invalid velocity unit');
    }
}
