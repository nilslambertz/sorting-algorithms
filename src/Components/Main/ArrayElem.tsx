import React from "react";

interface ArrayElemProps {
  special?: string;
  value?: number;
}

export default function ArrayElem({ special, value }: ArrayElemProps) {
  return (
    <div
      className={"flex-1 min-w-[1px] arrayElem bg-gray-300 " + special}
      style={{ height: value + "px" }}
    />
  );
}
