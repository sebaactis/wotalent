import { NavLink } from 'react-router-dom'

const NavBarItems = ({ isInFooter, accessToken }) => {

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

    const itemsLogged = [
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
        },

        {
            title: 'Panel',
            url: '/panel'
        }

    ];

    if (accessToken) {
        if (isInFooter) {
            return (
                <ul className="navbar-nav">
                    {itemsLogged.map((item) => {
                        return (
                            <li className="nav-item" key={item.title}>
                                <NavLink className="nav-link fw-bold" to={item.url}> {item.title} </NavLink>
                            </li>
                        )
                    })}
                </ul>
            )
        } else {
            return (

                <ul className="navbar-nav gap-3">
                    {itemsLogged.map((item) => {
                        return (
                            <li className="nav-item" key={item.title}>
                                <NavLink className="nav-link fw-bold" to={item.url}> {item.title} </NavLink>
                            </li>
                        )
                    })}
                </ul>
            )
        }
    } else {

        if (isInFooter) {
            return (
                <ul className="navbar-nav">
                    {items.map((item) => {
                        return (
                            <li className="nav-item" key={item.title}>
                                <NavLink className="nav-link fw-bold" to={item.url}> {item.title} </NavLink>
                            </li>
                        )
                    })}
                </ul>
            )
        } else {
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
    }




}

export default NavBarItems