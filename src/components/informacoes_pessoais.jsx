import React from 'react';
import PropTypes from 'prop-types';

// import '../styles/informacoes_pessoais.css';

const InformacoesPessoais = (props)=>{
    return(
        <div className = 'container alert alert-primary'>
            <p className = 'text-center'>Olá, meu nome é <strong className= 'text-uppercase'>{props.nome}</strong>, tenho <strong>{props.idade}</strong> anos e gosto de <strong>{props.hobbies}</strong></p>
        </div>
    )
}

InformacoesPessoais.propTypes = {
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    hobbies: PropTypes.string,
}
export default InformacoesPessoais;
