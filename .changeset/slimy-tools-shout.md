---
'brownian': major
---

The generation of random numbers for steps now follows a normal distribution, aligning more closely with the theory of Brownian motion. This change ensures a more accurate and realistic simulation. The functionality to set the base distance unit (m, cm, etc.) has been added. The total distance traveled is now calculated and returned in the unit chosen by the user, providing greater flexibility and accuracy in analyses. With the adoption of the normal distribution, the generation of random angles has become unnecessary.
