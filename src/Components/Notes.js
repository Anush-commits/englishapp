import React from 'react'

export default function Notes({note}) {
    return (
        <div className="notes">
            {
                note ? <h1>{note.NoteTitle} </h1> : null
            }
          <ol>  {
                note.noteslist ? note.noteslist.map(l => <li key={note.noteslist.indexOf(l)}> {l} </li>) : null
            }
            </ol>
            {
                note.thenote ? <p> { note.thenote} </p> : null
            }
           <ul className="examples"> 
           { 
           note.examples ? <> <h1>Օրինակներ՝</h1> <br/> {note.examples.map(e => <li> <b> {e[0]} </b> {e[1]} </li>)} </> : null
           
           }
            </ul>
        </div>
    )
}
