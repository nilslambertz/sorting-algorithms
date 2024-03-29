import React from "react";

interface SettingsBarProps {
  maxElems: number;
  numberOfElements: number;
  animationRunning: boolean;
  animationSpeed: number;
  changeElemNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newArrayClick: () => void;
  animationClick: () => void;
  changeSpeed: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SettingsBar({
  maxElems,
  numberOfElements,
  animationRunning,
  animationSpeed,
  changeElemNumber,
  newArrayClick,
  animationClick,
  changeSpeed,
}: SettingsBarProps) {
  const minElems = 5;

  return (
    <div className="p-3 border-b flex flex-row justify-center items-center text-white gap-20 select-none">
      <div
        className={
          "flex flex-col gap-2 items-center transition-opacity " +
          (animationRunning ? "opacity-10" : "")
        }
      >
        <input
          type="range"
          min={minElems}
          max={maxElems}
          value={numberOfElements}
          onChange={changeElemNumber}
        />
        <span> {numberOfElements} elements</span>
      </div>
      <div
        className={
          "text-2xl w-16 text-center text-shadow hover:text-shadow-blurred cursor-pointer " +
          (animationRunning ? "text-orange-500" : "text-green-400")
        }
        onClick={animationClick}
      >
        {animationRunning ? "stop" : "start"}
      </div>
      <div
        className={
          "text-2xl transition-opacity text-shadow hover:text-shadow-blurred cursor-pointer text-blue-200 " +
          (animationRunning ? "opacity-10" : "")
        }
        onClick={newArrayClick}
      >
        new array
      </div>
      <div
        className={
          "flex flex-col gap-2 items-center transition-opacity " +
          (animationRunning ? "opacity-10" : "")
        }
      >
        <input
          type="range"
          min="10"
          max="500"
          value={animationSpeed}
          onChange={changeSpeed}
        />
        <span>animation speed</span>
      </div>
    </div>
  );
}

export default SettingsBar;
