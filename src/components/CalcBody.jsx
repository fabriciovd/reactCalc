import ButtonRow from "./ButtonRow";
import CalcScreen from "./CalcScreen";
import { useState } from "react";

export default function CalcBody(props) {
  const [screenText, setScreenText] = useState("");
  let butonsArray = ["C  /", "789*", "456-", "123+", ".0<="];

  let textScreen = "0";

  function deleteChar() {
	textScreen = setScreenText(screenText.substring(0,screenText.length-1))
	
	console.log(screenText.substring(0,screenText.length-1));
  }

  const updateDisplay = (text) => {
    textScreen = text;
    setScreenText(screenText + textScreen);
  };

  const clearScreen = () => {
    textScreen = "";
    setScreenText(textScreen);
  };
  const calculateEval = ()=> {
	let calc = eval(screenText)
	textScreen = calc;
	setScreenText(calc);
	console.log(calc);
  }

  return (
    <div className="calc-body">
      <CalcScreen text={screenText} history={textScreen} />
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
		calc={calculateEval}
		delete={deleteChar}
      />
      {/* <button onClick={()=>{updateDisplay("Text")}} >Click me</button> */}
    </div>
  );
}
