import React from 'react'

export default function TenseForm({face1, face2}) {
    return (
       
        <div className="tenseform">
            <ul>
                {face1.map(f => <li key={f}> {f} </li>)}
            </ul>
            <ul>
                {face2.map(f => <li  key={f}> {f} </li>)}
            </ul>
        </div>
      
    )
}
