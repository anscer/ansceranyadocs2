---
sidebar_position: 1
---

# Joystick

A joystick is a component in ANSCER ANYA that provides manual control for navigating the robot. It allows users to manipulate the robot's movements manually, providing a hands-on way to guide the robot's actions and direction within its operational environment.

import Joystick, {JoystickBtn} from "@site/src/components/Joystick";

<div className="joystick-wrapper">
    <Joystick robotMode={1}/>
    <Joystick robotMode={2}/>
    <Joystick robotMode={3}/>
</div>

:::info

1. **Auto Mode** - The robot will move by its autonomous navigation system, and the joystick will be disabled.
2. **Manual Mode** - The robot will controlled by the joystick movement and it will move in the direction of the joystick.
3. **Brake Release Mode** - In Brake Release Mode, robot will not move either automatic or by the joystick. It will only release the brake of the robot. The joystick will be disabled.

:::

## How to use Joystick

- Click on the joystick and drag it in the desired direction to move the robot. The robot will move in the direction of the joystick.
- The further you drag the joystick, the faster the robot will move.
- The robot will stop moving when you release the joystick.
- The joystick will automatically return to the center position when you release it.
- The joystick is only accessible when the robot is in **Manual Mode**.

## Joystick Direction buttons

Robots Manual movement can also be possible by usig the direction button available on the joystick.
Click on the button to move the robot on that direction.

| Joystick direction button         | Robot Movement |
| --------------------------------- | -------------- |
| <JoystickBtn direction="Top"/>    | Straight Up    |
| <JoystickBtn direction="Right"/>  | Turn Right     |
| <JoystickBtn direction="Bottom"/> | Straight Down  |
| <JoystickBtn direction="Left"/>   | Turn Left      |

:::tip
If you want to drive the Robot straight use the **Up** and **Down** button. Through this the Robot will alwasys move in straight path. If you want to turn the Robot use the **Left** and **Right** button.
:::

:::info
Using Joystick is the manual operation so, it's important to ensure that the Robot is in the [**Manual mode**](./robot-modes/#manual-mode). Click here to learn more about [**Robot Modes**](./robot-modes).
:::
