"use client";

import { cn } from "@/lib/utils";
import { RotateCcwIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./shadcnui/select";

const AdvancedCalculator = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [operator, setOperator] = useState("");
  const [output, setOutput] = useState("");
  const allClear = inputOne === "" && inputTwo === "" && output === "";
  const calEmpty = operator === "" || inputOne === "" || inputTwo === "";
  const mainHandler = () => {
    if (inputOne !== "" && inputTwo !== "") {
      const valuOne = Number(inputOne);
      const valueTwo = Number(inputTwo);
      switch (operator) {
        case "+":
          setOutput((valuOne + valueTwo).toString());
          break;
        case "-":
          setOutput((valuOne - valueTwo).toString());
          break;
        case "*":
          setOutput((valuOne * valueTwo).toString());
          break;
        case "/":
          if (valueTwo === 0) {
            setOutput("Cannot divide by zero");
            break;
          }
          setOutput((valuOne / valueTwo).toString());
          break;

        default:
          setOutput("Please Select an operator");
          break;
      }
    }
  };

  const clear = () => {
    setOperator("");
    setInputOne("");
    setInputTwo("");
    setOutput("");
  };
  return (
    <section className="mx-auto grid w-full max-w-md place-items-center gap-3">
      <div className="grid w-full grid-cols-3 gap-3">
        <Input
          type="number"
          onChange={(e) => setInputOne(e.target.value)}
          value={inputOne}
          placeholder="Number One"
        />

        <Select
          value={operator}
          onValueChange={(value) => setOperator(value ?? "")}>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Operator" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Operators</SelectLabel>
              <SelectItem value="+">+</SelectItem>
              <SelectItem value="-">-</SelectItem>
              <SelectItem value="*">*</SelectItem>
              <SelectItem value="/">/</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          type="number"
          value={inputTwo}
          onChange={(e) => setInputTwo(e.target.value)}
          placeholder="Number Two"
        />

        <Input
          value={output}
          readOnly
          className={cn(
            "col-span-2 font-mono font-medium tracking-wide transition-all",
            "bg-muted/40 cursor-default select-all",
            output.startsWith("Cannot") || output.startsWith("Please") ?
              "text-destructive text-xs font-normal md:text-sm"
            : "text-foreground text-base font-semibold",
            "focus-visible:border-input focus-visible:ring-0",
          )}
          placeholder="Output"
        />
        <Button
          type="button"
          className="cursor-pointer bg-blue-600 text-white shadow-xs transition-colors duration-150 hover:bg-blue-700 active:bg-blue-800 disabled:pointer-events-none disabled:opacity-50"
          disabled={calEmpty}
          onClick={mainHandler}>
          Calculate
        </Button>
        <Button
          type="button"
          className={cn(
            "col-span-3 font-medium shadow-xs transition-all duration-150",
            "cursor-pointer bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
            "disabled:pointer-events-none disabled:opacity-50",
          )}
          disabled={allClear}
          onClick={clear}>
          All Clear
          <RotateCcwIcon className="mr-1.5 size-4" />
        </Button>
      </div>
    </section>
  );
};

export default AdvancedCalculator;
