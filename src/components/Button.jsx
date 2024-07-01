export default function ButtonRow(props) {
    // console.log(props);
    return(
        <div className={props.className} key={props.name} onClick={(e)=>{props.clickMe(props.name)}}>{props.name}</div>
    );
}
