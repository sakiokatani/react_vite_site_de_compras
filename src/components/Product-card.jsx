
import React, { useState, useEffect } from "react";
import Button from './Button.jsx'
import productCardStyle from "../styles/ProductCard.css"
import PropTypes from 'prop-types'

function ProductCard({id, nome, descricao, preco, imagem}){
    
    const button={
        prop1:"Comprar"
    }

    return(
        <>
        <div className="container-flex">
                <div className="image-wrapper">
                    <img class="fotoProduto" src={imagem} alt={nome}></img>
                </div>
                <div className="bottom-wrapper">
                    <div className="description-wrapper">
                        <h4 id={id}>{nome}</h4>
                        <p id={id}>{descricao}</p>
                        <p id={id}>{preco}</p>
                    </div>
                    <div>
                        <Button prop1={button.prop1} />
                    </div>
                </div>
        </div>
        </>
    )}


ProductCard.propTypes={
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
}

export default ProductCard;