import React from 'react'
import Data from '../Data';
import TenseForm from './TenseForm';


export default function BasicReference({ match }) {
    const found = Data[0][0]['contents'].find(i => i.id === match.params.id)
    let theme = Data[0][0]['list_of_themes'].find(x => x.id === found.id)
    let introList, tenseforms = null;
    if (found['intro'][1]) {
        introList = <ul> {found['intro'][1].map(i => <li> <b>{i.type}</b> {i.shortdescription}
          {i.example} </li>)} </ul>
    }
    if (found['tenseforms']) {
        tenseforms = <>
        <TenseForm face1={found['tenseforms']['affirmativeform'][0][0]} face2={found['tenseforms']['affirmativeform'][0][1]} />
        <TenseForm face1={found['tenseforms']['negativeform'][0][0]} face2={found['tenseforms']['negativeform'][0][1]} />
        <TenseForm face1={found['tenseforms']['interrogativeform'][0][0]} face2={found['tenseforms']['interrogativeform'][0][1]} />
         </>
    }
    return (
        <div>
            <h1 className="theme"> {theme.theme} </h1>
            <article>
                <h3> {found['intro'][0]} </h3>
                {introList}
                {tenseforms}
            </article>

        </div>
    )
}
