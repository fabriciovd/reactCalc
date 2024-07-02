import Button from './Button';

export default function ButtonRow(props) {
    //if button is C className is "button c"
    //if button is number className is "button"
    //if button is operator className is button l
    // console.log(typeof props.onClick);
    let symbolsArr = ['1234567890','.+-*//','C','=','<']
  return(
    <div className='calc-button-row'>
        {props.buttons.split("").map((button, index) => {
            if(button ===symbolsArr[2]){
                return <Button key={index} name={button} className="button c" clickMe={props.clear} />;
            }else if(symbolsArr[0].includes(button)){
                return <Button key={index} name={button} className="button" clickMe={props.onClick} />;
            }else if(button === symbolsArr[3]){
                return <Button key={index} name={button} className="button l" clickMe={(props.calc)}/>;
            }
            else if(button === "<"){
                return <Button key={index} name={button} className="button l" clickMe={(props.delete)}/>;
            }else{
                return <Button key={index} name={button} className="button l" clickMe={(props.onClick)}/>;
            }
        })}
    </div>
    
  );
}