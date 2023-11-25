/** @format */

import React, { useState, useRef } from "react";
export const SurpriseNumber = React.createContext();
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/style.css";
import Content from "./components/Content";
import Range from "./components/Range";
import FormNumber from "./components/Form";
import TableResult from "./components/Table";

export default function App() {
  const inputRef = useRef();
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 5));
  const [range, setRange] = useState(100);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [turn, setTurn] = useState();

  return (
    <SurpriseNumber.Provider
      value={{
        luckyNumber,
        setLuckyNumber,
        data,
        setData,
        inputRef,
        range,
        setRange,
        turn,
        setTurn,
      }}
    >
      <Content />
      <Range />
      <FormNumber />
      <TableResult />
      <ToastContainer autoClose={1500} />
    </SurpriseNumber.Provider>
  );
}
