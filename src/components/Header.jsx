import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (

            <nav className="bg-body-tertiary">
                <NavLink  to="/users"> Mutation </NavLink>
                <NavLink  to="/colors"> Infinite Scroll </NavLink>
                <NavLink  to="/superheroes">Pagination</NavLink>
            </nav>
    )
}

export default Header