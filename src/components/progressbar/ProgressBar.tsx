import React, { useState } from "react";
import "./ProgressBar.css";
import { ProgressBarProps } from "./ProgressBar.types";

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  let maxScore = props.maxScore;
  let score = props.score;
  return (
    <div
      className="progressBar"
      style={{
        width: `${maxScore * 16}px`,
      }}
    >
      <div
        className="progressBarInner"
        style={{
          width: `${(score / maxScore) * 100}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
