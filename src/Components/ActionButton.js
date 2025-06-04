import React from 'react';
import styles from './ActionButton.module.css'; 

function ActionButton({action, onClick, className}){
    return(
        <button className={`{$styles}${className}`}onClick={onClick}>{action}</button>
    );
}
export default ActionButton;