import React from "react";
import { StepDetails } from "../../Utils/Types";
import ArrayElem from "./ArrayElem";

interface MainProps {
  currentStep?: StepDetails;
  array?: number[];
}

export default function Main({ array, currentStep }: MainProps) {
  const firstHighlight = currentStep?.firstHighlight;
  const secondHighlight = currentStep?.secondHighlight;
  const firstArea = currentStep?.firstArea;
  const secondArea = currentStep?.secondArea;

  return (
    <div
      id="mainDiv"
      className="p-10 pt-0 w-full overflow-x-auto flex flex-row justify-center gap-[1px]"
    >
      {array?.map((value, index) => {
        let specialStyle = "";
        if (index === firstHighlight) specialStyle = "bg-blue-500";
        if (index === secondHighlight) specialStyle = "bg-blue-400";

        return (
          <ArrayElem
            key={index}
            special={specialStyle}
            style={{ height: value + "px" }}
          />
        );
      })}
    </div>
  );
}
