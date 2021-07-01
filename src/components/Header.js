import React from 'react'
import Typer from 'react-typed'


function Header() {
    return (
        <div className="header-wraper" >
            <div className="main-info" >
            <h1><span class="half-color" attribute="W">W</span>
                <span class="half-color" attribute="E">E</span>
                <span class="half-color" attribute="-">-</span>
                <span class="half-color" attribute="F">F</span>
                <span class="half-color" attribute="R">R</span>
                <span class="half-color" attribute="I">I</span><span> </span><span style={{fontSize: "50px"}}>
                  ENTERTAINMENT</span></h1>
                <Typer 
                    className="typed-text"
                    strings={["Music Videos", "Movies", "Documentary", "Films", "Tradition", "History"]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />  
            </div>
        </div>
    )
}

export default Header
