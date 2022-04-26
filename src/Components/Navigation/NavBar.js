import React from "react";

function NavBar({
  algorithms,
  currentAlgorithm,
  setAlgorithm,
  animationRunning,
}) {
  function changeAlgorithm(title) {
    if (animationRunning === true) return;

    setAlgorithm(title);
  }

  return (
    <div
      id="navBar"
      className="w-full select-none h-20 border-b flex flex-row flex-wrap justify-center items-center gap-10"
    >
      {algorithms.map(function (c, i, a) {
        let className = "";

        if (animationRunning) {
          className += "opacity-10";
        } else {
          className += "cursor-pointer hover:scale-105 transition-all";
        }

        if (c === currentAlgorithm) {
          className = "!text-white underline";
        }

        return (
          <div
            key={c}
            className={"text-2xl text-gray-400 " + className}
            onClick={() => changeAlgorithm(c)}
          >
            {c}
          </div>
        );
      })}
    </div>
  );
}

export default NavBar;
