import React from "react";
import { Result } from "./Weather.Style";

export default function ResultCard({ label, data, unit }) {
  return (
    console.log(data),
    (
      <Result class="result__profile">
        <span class="result__name">{label} </span>
        <span class="result__value">
          {data} <span>{unit}</span>
        </span>
      </Result>
    )
  );
}
