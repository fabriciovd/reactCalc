import Button from './Button';

export default function ButtonRow(props) {
    //if button is C className is "button c"
    //if button is number className is "button"
    //if button is operator className is button l
    // console.log(typeof props.onClick);
  return(
    <div className='calc-button-row'>
        {props.buttons.split("").map((button, index) => {
            if(button ==="C"){
                
                return <Button key={index} name={button} className="button c" clickMe={props.clear} />;
            }else if(button !=="C" && button !=="%" && button !=="/" && button !=="x" && button !=="-" && button !=="+" && button !=="="){
                return <Button key={index} name={button} className="button" clickMe={props.onClick} />;

            }else if(button === "="){
                return <Button key={index} name={button} className="button l" clickMe={(props.calc)}/>;
            }
            else{
                return <Button key={index} name={button} className="button l" clickMe={(props.onClick)}/>;
            }
        })}
    </div>
    
  );
}