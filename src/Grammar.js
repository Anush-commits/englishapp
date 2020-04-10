import React from 'react'
import Header from './Header'
import Basics from "./Components/Basics"

export default function Grammar() {
    return (
        <div>
            <nav>
                <ul>
                <Header where="/Basics" link="Basics" comp={Basics}/>
                <Header where="/Intermediate" link="Intermediate" />
                <Header where="/UpperIntermediate" link="Upper-Intermediate" />
                <Header where="/Advanced" link="Advanced" />
                </ul>
               
            </nav>
        </div>
    )
}



 
