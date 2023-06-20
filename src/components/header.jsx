import React from 'react'
import "../style/header-style.css"
export default function Header()
{
    return (
        <>
            <div className='header'>
                <img src='../images/logo.svg'/>
                <nav className='navbar'>
                    <ul className='list-items'>
                       <li>
                            Menu
                       </li>
                       <li>
                            Shop
                       </li> 
                       <li>
                            Blog
                       </li> 
                       <li>
                            Contact
                       </li> 
                    </ul>
                </nav>
                <div className='user-nav'>
                    <img src='../images/search.svg'/>
                    <img src='../images/contact.svg'/>
                    <img src='../images/heart.svg'/>
                    <img src='../images/bag.svg'/>
                </div>
            </div>
        </>
    )
}