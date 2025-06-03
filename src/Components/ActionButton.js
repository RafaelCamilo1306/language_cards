
function ActionButton({action, onClick, className}){
    return(
        <button className={`{$styles.Logout}${className}`}onClick={onClick}>{action}</button>
    );
}
export default ActionButton;