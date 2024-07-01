import ButtonRow from "./ButtonRow";
import CalcScreen from "./CalcScreen";
import { useState } from "react";

export default function CalcBody(props) {
  const [screenText, setScreenText] = useState("");
  let butonsArray = ["C≠%/", "789x", "456-", "123+", ".0<="];

  let textScreen = "0";

  function click(parameters) {
    console.log("Clicked");
  }

  const updateDisplay = (text) => {
    textScreen = text;
    setScreenText(screenText + textScreen);
  };

  const clearScreen = () => {
    textScreen = "0";
    setScreenText(textScreen);
  };

  return (
    <div className="calc-body">
      <CalcScreen text={screenText} />
      <ButtonRow
        buttons={butonsArray[0]}
        onClick={updateDisplay}
        clear={clearScreen}
      />
      <ButtonRow
        buttons={butonsArray[1]}
        onClick={updateDisplay}
        clear={clearScreen}
      />
      <ButtonRow
        buttons={butonsArray[2]}
        onClick={updateDisplay}
        clear={clearScreen}
      />
      <ButtonRow
        buttons={butonsArray[3]}
        onClick={updateDisplay}
        clear={clearScreen}
      />
      <ButtonRow
        buttons={butonsArray[4]}
        onClick={updateDisplay}
        clear={clearScreen}
      />
      {/* <button onClick={()=>{updateDisplay("Text")}} >Click me</button> */}
    </div>
  );
}
