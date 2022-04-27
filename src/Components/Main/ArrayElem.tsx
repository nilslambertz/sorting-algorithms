import React from "react";
import "./ArrayElem.css";

interface ArrayElemProps {
  sorted?: boolean;
  special?: string;
  style?: React.CSSProperties;
}

export default function ArrayElem({ sorted, special, style }: ArrayElemProps) {
  let className = "arrayElem bg-gray-300 ";
  if (sorted) {
    className += " transition-colors !bg-green-600";
  } else {
    if (special) className += " " + special;
  }
  return <div className={"flex-1 min-w-[1px] " + className} style={style} />;
}
