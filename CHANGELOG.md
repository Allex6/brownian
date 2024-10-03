# brownian

## 3.1.0

### Minor Changes

-   0c3d8f6: Adds the concepts of diffusion and velocity to the simulation. Allows dynamic calculation of the diffusion coefficient, and calculates the particle velocity at each step of the simulation

## 3.0.0

### Major Changes

-   bc6466a: The generation of random numbers for steps now follows a normal distribution, aligning more closely with the theory of Brownian motion. This change ensures a more accurate and realistic simulation. The functionality to set the base distance unit (m, cm, etc.) has been added. The total distance traveled is now calculated and returned in the unit chosen by the user, providing greater flexibility and accuracy in analyses. With the adoption of the normal distribution, the generation of random angles has become unnecessary.

    ### Breaking Changes

    -   Function call has changed. Consult the updated documentation for details.

    ### New Features

    -   Base distance unit can now be set.
    -   Total distance traveled is now calculated and returned in the unit chosen by the user.
    -   Random angles are no longer generated.
    -   The generation of random numbers for steps now follows a normal distribution.
    -   The simulation is now more accurate and realistic.

    ### How to migrate

    -   Update the function call to reflect the new syntax.
    -   Consult the updated documentation for details.
    -   Expect the total distance traveled to be returned in the unit chosen by the user.
