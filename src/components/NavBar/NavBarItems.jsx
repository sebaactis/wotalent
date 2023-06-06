import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarItems = () => {

    const items = [
        {
            title: 'Home',
            url: '/'
        },

        {
            title: 'Quienes Somos',
            url: '/quienes-somos'
        },

        {
            title: 'Servicios',
            url: '/servicios'
        },

        {
            title: 'Busquedas',
            url: '/busquedas'
        },

        {
            title: 'Contacto',
            url: '/contacto'
        }
    ];

    return (

        <ul className="navbar-nav gap-3">
            {items.map((item) => {
                return (
                    <li className="nav-item" key={item.title}>
                        <NavLink className="nav-link fw-bold" to={item.url}> {item.title} </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavBarItems