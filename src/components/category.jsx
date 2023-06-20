import React from 'react'
import "../style/category-style.css"
export default function Category()
{
    return (
        <>
            <div className='category'>
                <div className='category-text'>
                    <h2>
                        Explore by <br/>category 
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </div>
                <div className='category-cards'>
                    <ul>
                        <li>
                        
                           <img src='../images/category1.svg' className='up'/>
                        </li>
                        <li>
                            <img src='../images/category2.svg' className='down'/>
                        </li>
                        <li>
                            <img src='../images/category3.svg' className='up'/>
                        </li>
                        <li>
                            <img src='../images/category4.svg' className='down'/>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}