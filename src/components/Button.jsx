import React from "react";
import buttonStyle from '../styles/button.css'

function Button({prop1}){
    return(
    <div className="btn-container">
    <button type="button" className="batata">{prop1}</button>
    </div>
    )
}

export default Button;