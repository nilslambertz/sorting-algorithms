import React from "react";
import { StepDetails } from "../../Utils/Types";
import ArrayElem from "./ArrayElem";

interface MainProps {
  currentStep?: StepDetails;
  array?: number[];
  sorted?: boolean;
}

export default function Main({ array, currentStep, sorted }: MainProps) {
  const firstHighlight = currentStep?.firstHighlight;
  const secondHighlight = currentStep?.secondHighlight;
  const firstArea = currentStep?.firstArea ?? [-1, -1];
  const secondArea = currentStep?.secondArea ?? [-1, -1];

  return (
    <div
      id="mainDiv"
      className="p-10 pt-0 w-full overflow-x-auto flex flex-row justify-center gap-[1px]"
    >
      {array?.map((value, index) => {
        let specialStyle = "";
        if (firstArea[0] <= index && index <= firstArea[1])
          specialStyle = "bg-orange-500";
        if (secondArea[0] <= index && index <= secondArea[1])
          specialStyle = "bg-orange-600";

        if (index === firstHighlight) specialStyle = "bg-blue-500";
        if (index === secondHighlight) specialStyle = "bg-blue-400";

        if (sorted) specialStyle = "transition-colors !bg-green-600";

        return <ArrayElem key={index} special={specialStyle} value={value} />;
      })}
    </div>
  );
}
