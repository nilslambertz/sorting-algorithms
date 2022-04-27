import React from "react";

interface StatsProps {
  numberOfSwaps?: number;
  executionTime?: number;
}

export default function Stats({ numberOfSwaps, executionTime }: StatsProps) {
  return (
    <div className="px-5 py-1 border-b flex flex-row justify-between text-gray-300">
      <span>
        swaps: <span className="text-white">{numberOfSwaps}</span>
      </span>
      <span>
        execution time: <span className="text-white">{executionTime}ms</span>
      </span>
    </div>
  );
}
