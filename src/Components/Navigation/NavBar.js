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
        if (c === currentAlgorithm) {
          className = "!text-white underline";
        } else if (animationRunning) {
          className = "!cursor-default opacity-10 hover:scale-100";
        }
        return (
          <div
            key={c}
            className={
              "text-2xl text-gray-400 cursor-pointer hover:scale-105 transition-all " +
              className
            }
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
