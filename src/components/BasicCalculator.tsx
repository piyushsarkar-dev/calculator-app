"use client";

import { cn } from "@/lib/utils";
import { RotateCcwIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
  const [count, setCount] = useState("");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const plus = () => {
    if (inputOne !== "" && inputTwo !== "") {
      const total = Number(inputOne) + Number(inputTwo);
      setCount(total.toString());
    }
    setInputOne("");
    setInputTwo("");
  };

  const minus = () => {
    if (inputOne !== "" && inputTwo !== "") {
      const total = Number(inputOne) - Number(inputTwo);
      setCount(total.toString());
    }
    setInputOne("");
    setInputTwo("");
  };
  const multiply = () => {
    if (inputOne !== "" && inputTwo !== "") {
      const total = Number(inputOne) * Number(inputTwo);
      setCount(total.toString());
    }
    setInputOne("");
    setInputTwo("");
  };
  const divide = () => {
    if (inputOne !== "" && inputTwo !== "") {
      if (Number(inputTwo) === 0) {
        setCount("Cannot divide by zero");
        setInputOne("");
        setInputTwo("");
        return;
      }
      const total = Number(inputOne) / Number(inputTwo);
      setCount(total.toString());
    }
    setInputOne("");
    setInputTwo("");
  };
  const reset = () => {
    setInputOne("");
    setInputTwo("");
    setCount("");
  };
  const isDisabled = inputOne === "" || inputTwo === "";

  return (
    <section className="mx-auto grid w-full max-w-md place-items-center gap-3">
      <div className="grid w-full grid-cols-2 gap-2">
        <Input
          onChange={(e) => setInputOne(e.target.value)}
          value={inputOne}
          type="number"
          placeholder="Input 1"
        />
        <Input
          onChange={(e) => setInputTwo(e.target.value)}
          value={inputTwo}
          type="number"
          placeholder="Input 2"
        />
      </div>
      <Input
        placeholder="Preview Show Here"
        value={count}
        readOnly
        className={cn(
          "w-full text-center font-mono tracking-wide transition-all",
          "bg-muted/40 cursor-default select-all",
          count.startsWith("Cannot") ?
            "text-destructive text-xs font-normal md:text-sm"
          : "text-foreground text-base font-semibold",
          "focus-visible:border-input focus-visible:ring-0",
        )}
      />
      <div className="grid w-full grid-cols-4 gap-2">
        <Button
          type="button"
          className="hover:bg-primary/90 cursor-pointer font-semibold shadow-xs transition-colors disabled:pointer-events-none disabled:opacity-50"
          disabled={isDisabled}
          onClick={plus}>
          +
        </Button>
        <Button
          type="button"
          className="hover:bg-primary/90 cursor-pointer font-semibold shadow-xs transition-colors disabled:pointer-events-none disabled:opacity-50"
          disabled={isDisabled}
          onClick={minus}>
          -
        </Button>
        <Button
          type="button"
          className="hover:bg-primary/90 cursor-pointer font-semibold shadow-xs transition-colors disabled:pointer-events-none disabled:opacity-50"
          disabled={isDisabled}
          onClick={multiply}>
          *
        </Button>
        <Button
          type="button"
          className="hover:bg-primary/90 cursor-pointer font-semibold shadow-xs transition-colors disabled:pointer-events-none disabled:opacity-50"
          disabled={isDisabled}
          onClick={divide}>
          /
        </Button>
      </div>
      <Button
        type="button"
        disabled={inputOne === "" && inputTwo === "" && !count}
        onClick={reset}
        className={cn(
          "w-full font-medium shadow-xs transition-all duration-150",
          "cursor-pointer bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
          "disabled:pointer-events-none disabled:opacity-50",
        )}>
        Reset
        <RotateCcwIcon className="mr-1.5 size-4" />
      </Button>
    </section>
  );
};

export default BasicCalculator;
