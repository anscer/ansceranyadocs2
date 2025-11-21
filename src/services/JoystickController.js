class JoystickController {
  // stickID: ID of HTML element (representing joystick) that will be dragged
  // maxDistance: maximum amount joystick can move in any direction
  // deadzone: joystick must move at least this amount from origin to register value change
  constructor(stick, maxDistance, deadzone) {
    // this.id = stickID;
    // let stick = document.getElementById(stickID);
    // location from which drag begins, used to calculate offsets
    this.dragStart = null;
    this.SCALE = 0.3;
    this.FPS = 20;

    // track touch identifier in case multiple joysticks present
    this.touchId = null;

    this.active = false;
    this.value = { x: 0, y: 0 };
    this.pressed = false;
    this.interval = null;
    let self = this;

    function handleDown(event) {
      self.active = true;
      // all drag movements are instantaneous
      stick.style.transition = "0s";

      // touch event fired before mouse event; prevent redundant mouse event from firing
      event.preventDefault();

      if (event.changedTouches)
        self.dragStart = {
          x: event.changedTouches[0].clientX,
          y: event.changedTouches[0].clientY,
        };
      else self.dragStart = { x: event.clientX, y: event.clientY };

      // if this is a touch event, keep track of which one
      if (event.changedTouches)
        self.touchId = event.changedTouches[0].identifier;

      if (self.pressed) return;
      self.pressed = true;
      self.interval = setInterval(function () {
        moveAction();
      }, 1000 / self.FPS);
    }

    function handleMove(event) {
      if (!self.active) return;

      // if this is a touch event, make sure it is the right one
      // also handle multiple simultaneous touchmove events
      let touchmoveId = null;
      if (event.changedTouches) {
        for (let i = 0; i < event.changedTouches.length; i++) {
          if (self.touchId == event.changedTouches[i].identifier) {
            touchmoveId = i;
            event.clientX = event.changedTouches[i].clientX;
            event.clientY = event.changedTouches[i].clientY;
          }
        }

        if (touchmoveId == null) return;
      }

      const xDiff = event.clientX - self.dragStart.x;
      const yDiff = event.clientY - self.dragStart.y;
      const angle = Math.atan2(yDiff, xDiff);
      const distance = Math.min(maxDistance, Math.hypot(xDiff, yDiff));
      const xPosition = distance * Math.cos(angle);
      const yPosition = distance * Math.sin(angle);

      // move stick image to new position
      stick.style.transform = `translate3d(${xPosition}px, ${yPosition}px, 0px)`;

      // deadzone adjustment
      const distance2 =
        distance < deadzone
          ? 0
          : (maxDistance / (maxDistance - deadzone)) * (distance - deadzone);
      const xPosition2 = distance2 * Math.cos(angle);
      const yPosition2 = distance2 * Math.sin(angle);
      const xPercent = parseFloat((xPosition2 / maxDistance).toFixed(4));
      const yPercent = parseFloat((yPosition2 / maxDistance).toFixed(4));

      self.value = { x: xPercent, y: yPercent };
      // moveAction(self.value);
    }
    function moveAction(value = self.value) {
      // if (value.y !== 0 && value.x !== 0) {
      //   if (value.y > 0) {
      //     socket.emit(events.MOVE_ROBOT, {
      //       linear: -self.value.y * self.SCALE,
      //       angular: self.value.x * self.SCALE * 2,
      //     });
      //   } else {
      //     socket.emit(events.MOVE_ROBOT, {
      //       linear: -self.value.y * self.SCALE,
      //       angular: -self.value.x * self.SCALE * 2,
      //     });
      //   }
      // } else {
      //   socket.emit(events.MOVE_ROBOT, { linear: 0, angular: 0 });
      // }
    }
    function handleUp(event) {
      if (!self.active) return;

      // if this is a touch event, make sure it is the right one
      if (
        event.changedTouches &&
        self.touchId != event.changedTouches[0].identifier
      )
        return;

      // transition the joystick position back to center
      stick.style.transition = ".2s";
      stick.style.transform = `translate3d(0px, 0px, 0px)`;
      console.log("Move Up", self);
      // reset everything
      self.value = { x: 0, y: 0 };
      self.touchId = null;
      self.active = false;
      if (self.pressed) {
        self.pressed = false;
        moveAction(self.value);
        clearInterval(self.interval);
      }
    }

    stick.addEventListener("mousedown", handleDown);
    stick.addEventListener("touchstart", handleDown);
    document.addEventListener("mousemove", handleMove, { passive: false });
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("mouseup", handleUp);
    document.addEventListener("touchend", handleUp);
  }
}

export default JoystickController;
