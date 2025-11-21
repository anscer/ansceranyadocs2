---
sidebar_position: 2
---

# Types of Waypoint

In the realm of ANSCER Robots, waypoints are crucial reference points for navigation. Four primary waypoint types exist: Normal, Special, Charging, and Home. These waypoints guide the robot, enabling efficient and precise movement within its operational environment.

## Normal Waypoint

These are regular waypoints used for general navigation purposes. They represent specific locations in the environment where the robot can move to.

## Special Waypoint

Special waypoints are used to define specific locations or areas within the environment. They can be used for various purposes, such as marking pickup or drop-off points or other task-specific locations.

:::info
Docking marker is also required while creating a **Special waypoint**.

:::

## Charging Waypoint

Charging waypoints indicate locations where the robot can go to recharge its batteries. These waypoints allow the robot to autonomously navigate and dock for recharging.

:::info
Docking marker is also required while creating a **Charging waypoint**.

:::

## Home Waypoint

The Home waypoint represents the designated starting or ending point for the robot, and having multiple Home Waypoints allows for more flexibility in defining different starting or ending locations for the robot. It serves as a reference point for the robot to return to after completing its mission or robot will go to nearest home location when Idle.
