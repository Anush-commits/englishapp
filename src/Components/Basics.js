import React from 'react'
import Data from '../Data'
import {Link} from 'react-router-dom'
const Contents = () => <ol className="list_of_themes"> {Data[0][0]['list_of_themes'].map(l => <li key={l.id}> <Link to={`/Basics/${l.id}`}>  {l.theme} </Link> </li>  )}  </ol>

export default function BasicReference() {
    return (
        <div className="basic">
          <h1 className="refTitle"> Basic grammar reference</h1>
            <Contents/>
        </div>
    )
}

