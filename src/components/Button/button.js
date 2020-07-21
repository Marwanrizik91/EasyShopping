import React from 'react';
import './button.css';


const Button = (props) => {

    return (
        <div>
            <button className={`general_button ${props.className}`} type="button" onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

export default Button;
