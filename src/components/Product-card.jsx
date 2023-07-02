
import React, { useState, useEffect } from "react";
import Button from './Button.jsx'
import productCardStyle from "../styles/ProductCard.css"
import PropTypes from 'prop-types'
import typewriter from '../../public/assets/typewriter.jpg'
// import ProductData from '../product_data/products.json'

function ProductCard({id, nome, descricao, preco}){
    
    const button={
        prop1:"Comprar"
    }
    const [data, setData] = useState([]);
    const [imagePath, setImagePath] = useState('');

    useEffect(() => {
      fetchData();
    }, []);
 
    const BASEPATH = "/assets/FILE";
  
    const fetchData = async () => {
      try {
         const response = await fetch(ProductData);
         const jsonData = await response.json();
         setData(jsonData);
         const imagePath = jsonData.imagem;
         const updatedPath = BASEPATH.replace('FILE', imagePath);
         setImagePath(updatedPath);
         console.log(updatedPath);
        
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

return(
    <>
    <div className="container-flex">
            <div className="image-wrapper">
                <img src={imagePath} alt={nome}></img>
            </div>
            <div className="bottom-wrapper">
                <div className="description-wrapper">
                    <p id={id}>{nome}</p>
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