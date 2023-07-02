import React from "react";
import PropTypes from 'prop-types'
import menuStyles from '../styles/menubar.css'



const MenuBar=({prop1, prop2, prop3, prop4, prop5}) =>{

    const menuItems=[

        {
        id: 1,
        label:"Sobre a empresa",
        path:"#",
        },
        {
        id: 2,
        label:"Serviços",
        path:"#",
        },
        {
        id: 3,
        label:"Fale Conosco",
        path:"#",
        },
        {
        id: 4,
        label:"Trabalhe Conosco",
        path:"#",
        }
    ]
const renderMenuItems = (menuItems) =>{
    return(
            <li className="nav-item">
                <a className="nav-link" href={menuItems.path}>
                    {menuItems.label}
                </a>
            </li>
    );
}
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="menubar">
                {menuItems.map(renderMenuItems)}
            </ul>
        </nav>
    )
}
MenuBar.propTypes ={
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}
export default MenuBar;