import React, { useEffect, useState } from "react";
import NavBar from "./Components/Navigation/NavBar";
import Main from "./Components/Main/Main";
import {
  arrayIsSorted,
  generateArray,
  swapArrayElements,
} from "./Utils/Functions";
import SettingsBar from "./Components/Settings/SettingsBar";
import { Algorithms, StepDetails } from "./Utils/Types";
import { algorithms } from "./Utils/Algorithms";
import Footer from "./Components/Footer/Footer";
import Stats from "./Components/Stats/Stats";

const MAX_ELEMENTS = 600;

export default function App() {
  const [array, setArray] = useState<number[]>([]);
  const [sorted, setSorted] = useState(false);

  const [stepsGenerated, setStepsGenerated] = useState(false);
  const [steps, setSteps] = useState<StepDetails[]>([]);
  const [currentStep, setCurrentStep] = useState<StepDetails | undefined>();

  const [algorithm, setAlgorithm] = useState(Algorithms.bubbleSort);
  const [numberOfElements, setNumberOfElements] = useState(100);
  const [animationSpeed, setAnimationSpeed] = useState(500);

  const [animationInterval, setAnimationInterval] = useState<NodeJS.Timer>();
  const [animationRunning, setAnimationRunning] = useState(false);

  const [numberOfSwaps, setNumberOfSwaps] = useState(0);
  const [executionTime, setExecutionTime] = useState(0);

  useEffect(() => {
    createNewArray();
  }, [numberOfElements]);

  const resetValues = () => {
    setStepsGenerated(false);
    setNumberOfSwaps(0);
    setExecutionTime(0);
    setCurrentStep(undefined);
  };

  const changeAlgorithm = (algo: Algorithms) => {
    if (animationRunning || algo === algorithm) return;

    setAlgorithm(algo);
    resetValues();

    setSteps([]);
    setCurrentStep(undefined);
  };

  const changeSpeed = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (animationRunning) return;

    let newSpeed = parseInt(event.target.value);
    setAnimationSpeed(newSpeed);
  };

  const changeNumberOfElements = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (animationRunning) return;

    let newNumberOfElements = parseInt(event.target.value);
    setNumberOfElements(newNumberOfElements);
  };

  const endAnimation = (removeHighlights?: boolean) => {
    setArray((currentArray) => {
      setAnimationInterval((interval) => {
        if (interval) clearInterval(interval);
        return undefined;
      });
      setSorted(arrayIsSorted(currentArray));

      if (removeHighlights) {
        setCurrentStep(undefined);
      }
      setAnimationRunning(false);

      return currentArray;
    });
  };

  const animationStep = () => {
    setSteps((currentSteps) => {
      const newSteps = [...currentSteps];
      const nextStep = newSteps.shift();

      if (nextStep) {
        setArray((prevArr) => {
          const newArray = [...prevArr];
          const swaps = nextStep.swap;

          swaps?.forEach((swap) => {
            if (swap.length !== 2) return;

            swapArrayElements(newArray, swap[0], swap[1]);
            setNumberOfSwaps((n) => n + 1);
          });

          setCurrentStep(nextStep);

          if (newSteps.length === 0) {
            endAnimation(true);
          }

          return newArray;
        });
      }

      return newSteps;
    });
  };

  const toggleAnimationRunning = () => {
    if (sorted) return;

    const running = !animationRunning;
    setAnimationRunning(running);

    if (running) {
      if (!stepsGenerated) {
        const steps = algorithms[algorithm](array);
        setSteps(steps);
        setStepsGenerated(true);
      }

      setAnimationInterval(setInterval(animationStep, 505 - animationSpeed));
    } else {
      if (animationInterval) {
        endAnimation();
      }
    }
  };

  const createNewArray = () => {
    if (animationRunning) return;

    const newArray = generateArray(numberOfElements, MAX_ELEMENTS);
    setArray(newArray);
    resetValues();

    setSorted(arrayIsSorted(newArray));
  };

  return (
    <div className="App w-full h-full flex flex-col bg-blue-800 bg-opacity-80">
      <NavBar
        currentAlgorithm={algorithm}
        animationRunning={animationRunning}
        setAlgorithm={changeAlgorithm}
      />
      <SettingsBar
        maxElems={MAX_ELEMENTS}
        numberOfElements={numberOfElements}
        animationRunning={animationRunning}
        animationSpeed={animationSpeed}
        changeElemNumber={changeNumberOfElements}
        newArrayClick={createNewArray}
        animationClick={toggleAnimationRunning}
        changeSpeed={changeSpeed}
      />
      <Stats
        executionTime={executionTime}
        numberOfSwaps={numberOfSwaps}
      ></Stats>
      <Main array={array} currentStep={currentStep} sorted={sorted} />
      <Footer></Footer>
    </div>
  );
}
