---
sidebar_position: 1
---

# Navbar

The ANSCER ANYA user interface features a top navigation bar that provides convenient access to key functionalities and important information.

Here is a comprehensive description of the elements present in the top navigation bar:

## Mission Feedback

The Mission Feedback feature in ANSCER ANYA provides real-time information about the status and progress of ongoing robot missions. It offers valuable insights into the current robot activities and allows users to monitor and manage them effectively. Here is a comprehensive description of the elements and functionalities available in the **Mission Feedback** section

### Running Mission

- The Running Mission section displays information about the mission currently being executed by the robot.
- It includes details such as the mission name, description, iteration count.
- This information helps users identify the specific task or operation the robot is currently performing.

### Robot Emergency

- The Emergency section highlights any critical or emergency situations detected during the mission execution.
- It alerts users to unexpected events, safety concerns, or system failures that require immediate attention.

### Time Elapsed

- If a Mission is Running, this shows the duration of the current mission or task since it started.
- It provides users with real-time information about how much time has passed since the mission began.

### Types of Tasks and Their Statuses

- ANSCER ANYA allows the execution of various types of tasks, such as movement, process, interaction ect.
- The Mission Feedback section displays the different types of tasks involved in the current mission.
- It also indicates the status of each task, such as "In Progress," or "Completed,".

### Pause and Cancel Buttons

- The Pause and Cancel buttons offer control over the current robot operation.
- The Pause button allows users to temporarily halt the mission execution without canceling it entirely.
- The Cancel button stops the ongoing mission and terminates its execution.

## Emergency Stop Button

- The Emergency Stop button is a critical safety feature that enables users to immediately halt the operation of ANSCER Robots in case of emergencies or unforeseen situations.
- Clicking the Emergency Stop button triggers a system-wide stop command, bringing the robot to a halt.

## Robot Battery Indicator

- The Robot Battery indicator displays the current battery level of the ANSCER Robots.
- It provides a visual representation, such as a battery icon or a progress bar, indicating the remaining charge or battery status of the robots.
- This information helps users monitor the battery levels and plan robot activities accordingly.

## Robot Status

- The Robot Status indicator provides real-time information on the operational status of the ANSCER Robots.
- It may display different states such as "OK," "WARNING," "ERROR," "STALE," related to robot activity.
- This indicator enables users to quickly determine the availability and readiness of the robots.

| Status  | Status Code | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OK      | 0           | This indicates that the Robot is operating normally and there are no issues or errors to report.                                                                                                                                                                                                                                                                                                                        |
| WARNING | 1           | This indicates that the Robot is still operational but has encountered a non-critical issue or condition that should be noted.                                                                                                                                                                                                                                                                                          |
| ERROR   | 2           | This indicates that the Robot has encountered a critical issue or fault that requires attention or intervention. The Robot may not be functioning correctly.                                                                                                                                                                                                                                                            |
| STALE   | 3           | This typically means that the diagnostic information for the Robot is outdated or no longer relevant. Additionally, it can indicate that the data from that Robot is not available, which suggests that the module has stopped working or is unable to provide the expected information due to some issue. This status level is used when there is a concern about the currency or availability of data from the Robot. |

## Logged-in User Information

- The Active User information displays details about the currently logged-in user.
- It may include the user's name, profile picture, or a unique identifier.
- This provides a logout functionality.

## Lock/Unlock UI

- The Lock/Unlock UI button allows users to lock the user interface to prevent accidental interactions with the application.
- When the Lock button is activated, it restricts all interactions with the application, ensuring that accidental touches or clicks do not affect the ongoing operations.
- This feature is particularly useful in scenarios where the application is running on touch-enabled devices, minimizing the risk of unintended actions.
- To unlock the application and regain full interaction capability, users need to click or toggle the Unlock button.
- Locking the screen helps maintain the integrity of ongoing tasks and prevents unintended disruptions or errors caused by accidental touches or clicks.

## Fullscreen Button

- The Fullscreen button enables users to expand the application to full screen mode, maximizing the viewable area on the screen.
- Clicking on the Fullscreen button hides unnecessary browser elements and provides a more immersive experience.
