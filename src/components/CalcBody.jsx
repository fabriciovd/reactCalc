import ButtonRow from "./ButtonRow";
import CalcScreen from "./CalcScreen";

export default function CalcBody() {
    let butonsArray = ["C≠%/", "789x", "456-", "123+",".0<="];
    return(
        <div className='calc-body'>
            <CalcScreen/>
            <ButtonRow buttons={butonsArray[0]} />
            <ButtonRow buttons={butonsArray[1]} />
            <ButtonRow buttons={butonsArray[2]} />
            <ButtonRow buttons={butonsArray[3]} />
            <ButtonRow buttons={butonsArray[4]} />
        </div>
    )
}