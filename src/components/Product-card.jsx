import React from "react";
import Button from './Button.jsx'
import productCardStyle from "../styles/ProductCard.css"
import typewriter from '../../public/assets/typewriter.jpg'

function ProductCard(){
    const button={
        prop1:"Comprar"
    }

    return(
        <div className="container-flex">
            <div className="image-wrapper">
                <img className="produtoTypeWriter" src={typewriter} alt="máquina de escrever" />
            </div>
            <div className="description-wrapper">
                <p>Uma descrição de Produto aqui</p> 
            </div>
            <Button prop1={button.prop1} />
        </div>
    )
}

export default ProductCard;