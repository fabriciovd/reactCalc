export default function CalcScreen(props) {
  return (
    <div className="calc-screen">
      <div className="calc-operation">2536 + 419 + </div>
      <div className="calc-typed">
        {props.text}<span className="blink-me">_</span>
      </div>
    </div>
  );
}
