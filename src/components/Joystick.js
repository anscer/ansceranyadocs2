import React, { useEffect, useRef } from "react";
import JoystickController from "../services/JoystickController";

const Joystick = ({ robotMode = 1 }) => {
  const stickRef = useRef(null);
  useEffect(() => {
    if (!stickRef.current) return;

    const joystic = new JoystickController(stickRef.current, 64, 8);
  }, [stickRef]);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };
  const str = `${
    robotMode === 1
      ? "auto"
      : robotMode === 2
      ? ""
      : robotMode === 3
      ? "break"
      : "hide"
  }`;
  const text = `${
    robotMode === 1
      ? "Auto Mode"
      : robotMode === 2
      ? "Manual Mode"
      : robotMode === 3
      ? "Break Release Mode"
      : "hide"
  }`;
  return (
    <>
      <div className={`joystick ${str}`}>
        <div className="overlay">
          <img
            draggable={false}
            onContextMenu={handleContextMenu}
            src="/img/JoystickTop.png"
            className="joystickTop"
            alt="JoystickTop"
          />
          <img
            draggable={false}
            onContextMenu={handleContextMenu}
            src="/img/JoystickTop.png"
            className="joystickRight"
            alt="JoystickTop"
          />
          <img
            draggable={false}
            onContextMenu={handleContextMenu}
            src="/img/JoystickTop.png"
            className="joystickBottom"
            alt="JoystickTop"
          />
          <img
            draggable={false}
            onContextMenu={handleContextMenu}
            src="/img/JoystickTop.png"
            className="joystickLeft"
            alt="JoystickTop"
          />
        </div>
        <img src="/img/JoystickBase.png" draggable={false} alt="JoystickBase" />
        <div id="stick" ref={stickRef}>
          <img src="/img/JoystickRed.png" alt="Joystick" />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};
export const JoystickBtn = ({ direction }) => {
  const stickRef = useRef(null);
  useEffect(() => {
    if (!stickRef.current) return;

    const joystic = new JoystickController(stickRef.current, 64, 8);
  }, [stickRef]);
  const handleContextMenu = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={`joystick`}>
        {!direction && (
          <div className="overlay">
            <img
              draggable={false}
              onContextMenu={handleContextMenu}
              src="/img/JoystickTop.png"
              className="joystickTop"
              alt="JoystickTop"
            />
            <img
              draggable={false}
              onContextMenu={handleContextMenu}
              src="/img/JoystickTop.png"
              className="joystickRight"
              alt="JoystickTop"
            />
            <img
              draggable={false}
              onContextMenu={handleContextMenu}
              src="/img/JoystickTop.png"
              className="joystickBottom"
              alt="JoystickTop"
            />
            <img
              draggable={false}
              onContextMenu={handleContextMenu}
              src="/img/JoystickTop.png"
              className="joystickLeft"
              alt="JoystickTop"
            />
          </div>
        )}
        {direction && (
          <div className="overlay">
            <img
              draggable={false}
              onContextMenu={handleContextMenu}
              src="/img/JoystickTop.png"
              className={`joystick${direction}`}
              alt="JoystickTop"
            />
          </div>
        )}
        <img
          src="/img/JoystickBaseClean.png"
          draggable={false}
          alt="JoystickBase"
        />
        <div id="stick" ref={stickRef}>
          <img src="/img/JoystickRed.png" alt="Joystick" />
        </div>
      </div>
    </>
  );
};
export default Joystick;
