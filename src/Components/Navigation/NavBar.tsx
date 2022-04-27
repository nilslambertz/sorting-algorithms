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
      {algorithms.map((algorithm, index) => {
        let className = "";

        if (animationRunning) {
          className += "opacity-10";
        } else {
          className += "cursor-pointer hover:scale-105";
        }

        if (algorithm === currentAlgorithm) {
          className = "!text-white underline";
        }

        return (
          <div
            key={algorithm}
            className={"text-2xl text-gray-400 transition-all " + className}
            onClick={() => changeAlgorithm(algorithm)}
          >
            {algorithm}
          </div>
        );
      })}
    </div>
  );
}

export default NavBar;
