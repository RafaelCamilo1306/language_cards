import React from 'react';


function ActionButton({action, onClick, className}){
    return(
        <button className={className}onClick={onClick}>{action}</button>
    );
}
export default ActionButton;