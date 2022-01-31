import "./App.css";
import { useState } from "react";

const App = () => {
  const createNums = () => {
    const Nums = [];
    for (let i = 1; i < 10; i++) {
      Nums.push(
        <button onClick={() => handleClick(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return Nums;
  };

  const [value, setValue] = useState("0");
  const [result, setResult] = useState("0");

  const handleClick = (x) => {
    const lastValue = value[value.length - 1];
    const regex1 = /[/*+-]/;
    const regex2 = /[/*+]/;
    if (value === "0" && !regex2.test(x)) {
      setValue(x);
    } else if (regex1.test(lastValue) && regex1.test(x)) {
      setValue(value);
    } else {
      setValue(value + x);
      setResult(eval(value + x));
    }
  };

  const evaluate = () => {
    setValue(eval(value));
  };

  const clear = () => {
    setValue("0");
    setResult(eval("0"));
  };

  const deleteLast = () => {
    if (value.length === 1) {
      setValue("0");
    } else {
      setValue(value.slice(0, value.length - 1));
      setResult(value.slice(0, value.length - 1));
    }
  };

  return (
    <div className="Calculator">
      <div className="display">
        {value === result ? "" : <span>({result})</span>}
        {value}
      </div>
      <div className="Operators">
        <button id="divide" onClick={() => handleClick("/")}>
          /
        </button>
        <button id="multiply" onClick={() => handleClick("*")}>
          x
        </button>
        <button id="add" onClick={() => handleClick("+")}>
          +
        </button>
        <button id="subtract" onClick={() => handleClick("-")}>
          -
        </button>
        <button id="clear" onClick={() => clear()} className="Remove">
          C
        </button>
        <button onClick={() => deleteLast()} className="Remove">
          DEL
        </button>
      </div>
      <div className="Digits">
        {createNums()}
        <button onClick={() => handleClick("0")}>0</button>
        <button id="decimal" onClick={() => handleClick(".")}>
          .
        </button>
        <button id="equals" onClick={() => evaluate()} className="Equal">
          =
        </button>
      </div>
    </div>
  );
};

export default App;
