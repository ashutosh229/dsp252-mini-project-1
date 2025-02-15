"use client";

import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

// Sample data structure (Replace this with actual data from your dataset)
const data = [
  { name: "Age", min: -1.5, q1: -0.75, median: 0, q3: 0.75, max: 1.5 },
  {
    name: "Panic_Attack_Frequency",
    min: -1.5,
    q1: -0.75,
    median: 0,
    q3: 0.75,
    max: 1.5,
  },
  {
    name: "Duration_Minutes",
    min: -1.5,
    q1: -0.75,
    median: 0,
    q3: 0.75,
    max: 1.5,
  },
  { name: "Heart_Rate", min: -1.5, q1: -0.75, median: 0, q3: 0.75, max: 1.5 },
  {
    name: "Caffeine_Intake",
    min: -1.5,
    q1: -0.75,
    median: 0,
    q3: 0.75,
    max: 1.5,
  },
  {
    name: "Exercise_Frequency",
    min: -1.5,
    q1: -0.75,
    median: 0,
    q3: 0.75,
    max: 1.5,
  },
  { name: "Sleep_Hours", min: -1.5, q1: -0.75, median: 0, q3: 0.75, max: 1.5 },
  {
    name: "Alcohol_Consumption",
    min: -1.5,
    q1: -0.75,
    median: 0,
    q3: 0.75,
    max: 1.5,
  },
  { name: "Panic_Score", min: -1.5, q1: -0.75, median: 0, q3: 0.75, max: 1.5 },
];

// Custom box shape
const CustomBox = (props: any) => {
  const { x, y, width, height, fill, stroke } = props;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    />
  );
};

// Custom whisker shape
const CustomWhisker = (props: any) => {
  const { x, y1, y2, stroke } = props;
  return <line x1={x} x2={x} y1={y1} y2={y2} stroke={stroke} />;
};

const BoxPlotChart = () => {
  return (
    <div className="w-full h-[500px] p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">
        Boxplots of Numerical Features
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip />
          {data.map((entry, index) => {
            const boxHeight = entry.q3 - entry.q1;
            const boxY = entry.q1;
            const whiskerY1 = entry.min;
            const whiskerY2 = entry.max;
            return (
              <g key={`boxplot-${index}`}>
                <CustomWhisker
                  x={index * 100 + 75}
                  y1={whiskerY1}
                  y2={boxY}
                  stroke="black"
                />
                <CustomBox
                  x={index * 100 + 50}
                  y={boxY}
                  width={50}
                  height={boxHeight}
                  fill="blue"
                  stroke="black"
                />
                <CustomWhisker
                  x={index * 100 + 75}
                  y1={boxY + boxHeight}
                  y2={whiskerY2}
                  stroke="black"
                />
              </g>
            );
          })}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BoxPlotChart;
