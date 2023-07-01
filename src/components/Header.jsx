import React from 'react';
import PropTypes from 'prop-types'
import headerStyle from '../styles/header.css'

const Header = ({prop1, prop2, prop3, prop4})=>{
    return(
        <nav className='menu-principal-wrapper'>
            <div className='logo-wrapper text-left'>
                <a className='companyName' href='#'>{prop4}</a>
            </div>
            
            <div className='menu-wrapper text-right'>
                <a className= 'menu' href='#'>{prop1}</a>
                <a className= 'menu' href='#'>{prop2}</a>
                <a className= 'menu' href='#'>{prop3}</a>
            </div>
        </nav>
    )
}

export default Header;