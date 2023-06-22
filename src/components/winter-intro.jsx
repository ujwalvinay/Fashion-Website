import React from 'react'
import "../style/winter-style.css"
export default function WinterIntro()
{
    return(
        <>
            <div className='winter-intro'>
                <div className='img-div'>
                    <img src='../images/winter-img.svg'/>
                </div>
                <div className='intro-text'>
                    <h2>
                        New Winter<br/>
                        Collection 2023
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur  .
                    </p>
                    <ul className='buttons'>
                        <li>
                            <button className='men-btn'>
                                FOR MEN
                            </button>
                        </li>
                        <li>
                        <button className='women-btn'>
                                FOR WOMEN
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}