import React from 'react'
import Header from './Header';
import Grammar from './Grammar';
import Vocabulary from './Components/Vocabulary';


export default function Home() {
    return (
        <nav>
          <ul>
          <Header where="/Grammar" link="Grammar" comp={Grammar} />
          <Header where="/vocabulary" link="Vocabulary" comp={Vocabulary} />
          </ul>
       
        </nav>
          
    )
}
