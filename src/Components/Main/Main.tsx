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
  const importantHighlight = currentStep?.importantHighlight;
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
          specialStyle = "bg-orange-500 dark:bg-orange-700";
        if (secondArea[0] <= index && index <= secondArea[1])
          specialStyle = "bg-orange-600 dark:bg-orange-900";

        if (index === firstHighlight)
          specialStyle = "bg-blue-500 dark:bg-blue-800";
        if (index === secondHighlight)
          specialStyle = "bg-blue-400 dark:bg-blue-600";
        if (index === importantHighlight)
          specialStyle = "bg-red-400 dark:bg-red-600";

        if (sorted)
          specialStyle =
            "transition-colors bg-red !bg-green-600 dark:!bg-green-800";

        return <ArrayElem key={index} special={specialStyle} value={value} />;
      })}
    </div>
  );
}
