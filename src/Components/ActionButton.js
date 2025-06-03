function ActionButton({action, onClick}){
    return(
        <button onClick={onClick}>{action}</button>
    );
}
export default ActionButton;