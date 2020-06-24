import React from 'react'
import {NavLink as Link} from 'react-router-dom'

export default function Navigation() {
    const active = {fontWeight:'bold'}
    return (
        <nav>
            <ul>
                <li><Link exact to="/" activeStyle={active}>Main</Link></li> 
                <li><Link to="/hello" activeStyle={active}>Hello</Link></li> 
                <li><Link to="/checkage" activeStyle={active}>Age</Link></li> 
                
            </ul>
        </nav>
    )
}
