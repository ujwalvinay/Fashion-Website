import React from 'react'
import "../style/hero-style.css"
export default function Hero()
{
    return (
        <>
            <section className='container'>
                <div className='slider-wrapper'>
                    <div className='slider'>
                        <img src='../images/hero-bg1.svg' id='slide1' />
                        <img src='../images/hero-bg2.svg' id='slide2'/>
                        <img src='../images/hero-bg3.svg' id='slide3'/>
                    </div>
                    <div className='slider-nav'>
                        <a href='slider-1'> </a>
                        <a href='slider-2'> </a>
                        <a href='slider-3'> </a>
                    </div>
                </div>
            </section>
        </>
    )
}