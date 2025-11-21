---
sidebar_position: 2
---

# Start Mapping

## Steps to Create a Map

- Before proceeding with mapping, ensure that the robot is in **manual mode**, neither in **automatic mode** nor **brake release mode**. This allows you to manually control the robot's movements during the mapping process.
- Upon entering the mapping screen, you will be presented with a visual representation of the environment and the robot's current position.
- Use the joystick present on the screen to move the robot. Navigate the robot throughout the environment, ensuring comprehensive coverage and scanning of all desired areas.
- As the robot moves, the LiDAR sensor scans the surroundings and collects data. ANSCER ANYA processes this data to generate a visual representation of the environment, including walls, obstacles, pathways, and other features.
- It is important to ensure that the robot covers every possible area of the environment. Returning to the starting point or ensuring complete coverage of all desired regions can help create an accurate and comprehensive map.
- Once the mapping process is complete, click on the "**Save Map**" button to save the map.
- This will open a pop-up window, prompting you to enter a name for the map. Provide a suitable name for the map to easily identify it in the future.
- Click on the "**Save**" button to save the map.
- The newly created map will be visible in the **Maps Dashboard**.

:::info
Newly created maps are not automatically loaded into the robot. To load the map into the robot, see [**Load Map**](/docs/anscer-anya/maps/load-map).
:::
:::info
It's important to ensure that the robot is in the [**Manual mode**](../features/robot-modes/#manual-mode) for Mapping. If the robot is in [**Automatic mode**](../features/robot-modes/#automatic-mode) or [**Brake Release mode**](../features/robot-modes/#brake-release-mode), the "**Start Mapping**" button will be disabled. Click here to learn more about [**Robot Modes**](../features/robot-modes).
:::
:::caution
Mapping can not be paused. If you wish to stop the mapping process, click on the "**Cancel**" button. This will cancel the mapping process and delete all the data collected during the mapping process. Next time you wish to create a map, you will have to start the mapping from the beginning.
:::
:::tip
For a better mapping experience, it is recommended to navigate the Robot in complex(not linear) direction and take implace turns(means to rotate the robot in its place). This allows the robot to scan the environment more accurately and generate a more precise map.
:::
