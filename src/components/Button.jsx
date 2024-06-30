export default function ButtonRow(props) {
    return(
        <div className={props.className} key={props.name}>{props.name}</div>
    );
}