---
sidebar_position: 1
---

import {MissionTaskChip,MissionTaskList} from "@site/src/components/LottieIcon";

# Dashboard

Here we will be exploring the **Mission Creator** interface of ANSCER ANYA. It covers the various tools, controls, and features available to users for mission creation. We will learn how to navigate and understand its different elements to make the most out of the mission creation process.

Mission creator dashboard consists of the following components:

## Mission Visualization

Mission Visualization provides you a comprehensive view of the missions, zones and map you are working. It is the main workspace where you can create and edit missions.

## Tools and Features

### Zoom In

This tool allows you to zoom in on the map, providing a closer view of the area you are working on.

### Zoom Out

This tool enables you to zoom out on the map, providing a broader view of the entire area.

### Fullscreen

This feature allows you to view the map in full-screen mode, maximizing the available screen space. It provides a larger workspace for better visualization and interaction.

## "Create Mission" Button

**“Create Mission”** button is visible when you are creating a new Mission. It saves the newly created Mission when clicked.

## "Update Mission" Button

**“Update Mission”** button is visible when you update an existing Mission. It Updates the changes done to the Mission.

## Mission Visualization

Mission Visualization Screen present on the left side gives information about tasks, their type and sequence being used in the mission.

This builds on top of Drag and Drop feature. It consists of two main components:

### Draggable Tasks Tab

Tasks Tab consist of various Tasks Categorized according to their types. Tasks can be selected either by dragging it to the Droppable task list area or by clicking on the ✅ icon present on that particular task.

Tasks Tab contains all the available tasks, that is categorized into 3 sections:

**`Movement`**, **`Process`**, **`Interaction`** each sections contains tasks that are related to that particular category and can be accessed by clicking on the respective section.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="movement" label="Movement" default>
    <div className="tasks-wrapper">
      <MissionTaskChip icon={"move"} label={"Move"}/>
      <MissionTaskChip icon={"charging"} label={"Charge"}/>
      <MissionTaskChip icon={"multiWaypoint"} label={"Multi Waypoint"}/>
      <MissionTaskChip icon={"qrMarker"} label={"QR"}/>
    </div>
  </TabItem>
  <TabItem value="process" label="Process">
    <div className="tasks-wrapper">
      <MissionTaskChip icon={"lifter"} label={"Lifter"}/>
      <MissionTaskChip icon={"conveyor"} label={"Conveyor"}/>
      <MissionTaskChip icon={"turnTable"} label={"Turn Table"}/>
      <MissionTaskChip icon={"manipulator"} label={"Manipulator"}/>
      <MissionTaskChip icon={"docking"} label={"Docking"}/>
      <MissionTaskChip icon={"undocking"} label={"Un-Docking"}/>
    </div>
  </TabItem>
  <TabItem value="interaction" label="Interaction">
    <div className="tasks-wrapper">
      <MissionTaskChip icon={"waitUser"} label={"Wait"}/>
      <MissionTaskChip icon={"buzzer"} label={"Buzzer"}/>
    </div>
  </TabItem>
</Tabs>

### Droppable Task List Area

Droppable Task list consists of all the tasks that are selected from the Task Tab. Tasks can be reordered by dragging them up and down. Tasks can be removed by clicking on the 🗑️ icon present on the end of that particular task.

<div className="tasks-list-wrapper">
  <MissionTaskList icon={"move"} label={"Move"} data={"Aisle 2"}/>
  <MissionTaskList icon={"charging"} label={"Charge"} data={"Charge 30 Mins"}/>
  <MissionTaskList icon={"docking"} label={"Docking"} data={"Marker: Pickup 1 | Type: Trolley"}/>
  <MissionTaskList icon={"lifter"} label={"Lifter"} data={"Lift Up"}/>
  <MissionTaskList icon={"move"} label={"Move"} data={"Drop Point 1"}/>
  <MissionTaskList icon={"undocking"} label={"Un-Docking"} data={"Type: Trolley"}/>
  <MissionTaskList icon={"move"} label={"Move"} data={"Home"}/>
</div>

#### Task Configuration/List

Task List consists of the following components:

<div className="tasks-list-wrapper">
  <MissionTaskList icon={"charging"} label={"Charge"} data={"Charge: 75%"}/>
  <MissionTaskList icon={"waitUser"} label={"Wait"} />
</div>

- Task Icon
- Task Type
- Task Data/Warning
- Delete Task Button

:::info
Initialy Tasks will show **Warning** ⚠️ while adding/droping to the Tasks List. It indicates that the task is empty, you need to provide the data related to the Task. Once the Task is configured it will show **Task Data**.
:::
:::info
Droppable Task List area will be empty when you are creating a new Mission, from Tasks Tab you can select the tasks you want to add to the Mission.
:::
