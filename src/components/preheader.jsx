import React from 'react'
import "../style/preheader-style.css"
export default function Preheader()
{
    return (
        <>
            <div className='pre-header'>
                    <ul className='left-menu'>
                        <li className='list-item'>
                            <img src='../images/location.svg'/>
                            <p>Locate Store</p>
                        </li>
                        <li className='list-item'>
                            <img src='../images/mail.svg'/>
                            <p>Info@thefashionvault.com</p>
                        </li>
                    </ul>
                    
                    <ul className='right-menu'>
                        <li className='list-item'>
                            <p>INR</p>
                            <img src='../images/down-arrow.svg'/>
                        </li>
                        <li className='list-item'>
                            <p>English</p>
                            <img src='../images/down-arrow.svg'/>
                        </li>
                    </ul>
            </div>
        </>
    )
}