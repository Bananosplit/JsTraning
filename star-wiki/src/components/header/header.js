import React from 'react'
import './header.css'

export default function Header(){

    return(
        <div className = "header">
            <div className = "header__main"><h2>Star DB</h2></div>
            <div className = "header__list">
                <ul>
                    <li>People</li>
                    <li>Planets</li>
                    <li>Starships</li>
                </ul>
            </div>
        </div>
    )
}