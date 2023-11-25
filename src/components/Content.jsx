/** @format */

import React, { useLayoutEffect } from "react";
import { SurpriseNumber } from "../App";
import { useContext } from "react";
import { MAX_TIME } from "./config";

export default function Content() {
  const { range, turn } = useContext(SurpriseNumber);
  return (
    <>
      <h2 className="title">Chơi đoán số không bạn ?</h2>
      <h2>
        Số lần còn lại: {turn}/ {MAX_TIME(range)}{" "}
      </h2>
      <h2>đơn giản bạn chỉ cần đoán đúng 1 số từ {range}</h2>
    </>
  );
}
