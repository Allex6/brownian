export interface Force {
    /**
     * @description The force in the x-direction
     */
    x: number;
    /**
     * @description The force in the y-direction
     */
    y: number;
    /**
     * @description The force in the z-direction
     */
    z: number;
}

export interface Gravity extends Force {}
