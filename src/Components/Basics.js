import React, {useState} from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Introduction = Data[0][0]

export default function Basics() {
   
    

    
    return (
        <div className="basic">
              <h1 className="refTitle"> Basic Grammar Reference </h1>
            <ol className="list_of_themes"> 
         {   Introduction.list_of_themes.map(theme =>  <li  key={theme.id}> <Link to={`/Basics/${theme.id}`}> {theme.theme} </Link> </li>)}
           </ol>
           
         
        </div>
    )
}
