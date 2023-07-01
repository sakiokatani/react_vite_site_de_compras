import React from "react";
import Button from './Button.jsx'
import productCardStyle from "../styles/ProductCard.css"
// import bicicleta from '../assets/bicycle.jpg'

function ProductCard(){
    const button={
        prop1:"Comprar"
    }
    // if(button.classList.includes('inactive')){
    //     const button ={
    //         prop1:"Indisponível"
    //     }
    // }

    return(
        <div className="container-flex">
            <div className="image-wrapper">
                {/* <img src={bicicleta} alt="Bicicleta"/> */}
            </div>
            <div className="description-wrapper">
                <p>Uma descrição de Produto aqui</p> 
            </div>
            <Button prop1={button.prop1} />
        </div>
    )
}

export default ProductCard;