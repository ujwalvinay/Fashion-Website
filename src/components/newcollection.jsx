import React from 'react'
import "../style/collection-style.css"
export default function NewCollection()
{   return (
    <>
        <div class="parent collection-grid">
            <div className='left-child'>
                <div class="div1">
                    <img src='../images/collection-img1.svg'/>
                </div>
                <div class="div2">
                    <button className='collection-btn'>
                        Explore Our Latest Collection
                    </button>
                </div>
            </div>
            <div className='right-child'>
                <div class="div3">
                    <p className='collection-p'>New Collections <img src='../images/right-arrow.svg'/></p>
                    <h2>
                        Make your special <br/>
                        nights memorable
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    </p>
                </div>
                <div class="div4">
                    <img src='../images/collection-img2.svg'/>
                </div>
            </div>
        </div>
    </>
)
}