export default function CalcScreen(props) {
  return (
    <div className="calc-screen">
      <div className="calc-operation">React Calc</div>
      <div className="calc-typed">
        {props.text}<span className="blink-me">_</span>
      </div>
    </div>
  );
}
