import React from "react";

interface NavBarProps {
  algorithms: string[];
  currentAlgorithm: string;
  setAlgorithm: (t: string) => void;
  animationRunning: boolean;
}

function NavBar({
  algorithms,
  currentAlgorithm,
  setAlgorithm,
  animationRunning,
}: NavBarProps) {
  function changeAlgorithm(title: string) {
    if (animationRunning === true) return;

    setAlgorithm(title);
  }

  return (
    <div
      id="navBar"
      className="w-full select-none h-20 border-b flex flex-row flex-wrap justify-center items-center gap-10"
    >
      {algorithms.map((algorithm) => {
        return (
          <button
            key={algorithm}
            className={
              "text-2xl text-gray-400 hover:text-white cursor-pointer transition-all disabled:opacity-10 disabled:cursor-default disabled:hover:text-gray-400 " +
              (currentAlgorithm === algorithm ? "!text-white underline" : "")
            }
            disabled={animationRunning && algorithm !== currentAlgorithm}
            onClick={() => changeAlgorithm(algorithm)}
          >
            {algorithm}
          </button>
        );
      })}
    </div>
  );
}

export default NavBar;
