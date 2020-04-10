import React, { useEffect, useState } from 'react'
import Data from "../Data"
import TenseForm from './TenseForm';
import Notes from './Notes';
export default function BasicReference({ match }) {
    const [context, setcontent] = useState({})
    let contents = Data[0][0]["contents"];
    useEffect(() => {
        let found = contents.find(cont => {
            return match.params.id === cont.id
        })

        setcontent(
            found
        )



    }, [contents, match.params.id])

    let tenseForm, negativeForm, questionform, notes, meaninganduse, usageList, description, boldtxt = null;
    if (context.tenseform) {
        tenseForm = <TenseForm face1={context.tenseform[0][0]} face2={context.tenseform[0][1]} />

    }


    if (context.negativeform) {
        negativeForm = <TenseForm face1={context.negativeform[0][0]} face2={context.negativeform[0][1]} />
    }
  
    if (context.questionform) {
        questionform = <TenseForm face1={context.questionform[0][0]} face2={context.questionform[0][1]} />
    }
    
  if (context.notes) {
      notes = <Notes note={context.notes}/>
  }
if (context.definition) {
    meaninganduse = context.definition[0]
    if (context.definition[1]) {
        usageList = <UsageList list={ context.definition[1]}/>
    }
}

let regexp = /\w$/;
if ( context.description) {
  description = context.description.map( des => {
    let txt = des[1].split(" ");
   return ( <>
    <h1> {des[0]} </h1>
    {/* <p> {des[1]} { txt.map(t =>  t.match(regexp) ? <b>{t} </b> : null) } </p> */}
    </>
   )


  })
}

    return (
        <div className="refer"> 
         <h1 className="refTitle"> Basic Grammar Reference</h1>
               <article>
                { meaninganduse }
                {usageList}       
                {description}        
                <div className="tenses">
                <h1>Form</h1>
                {tenseForm}
                <h1> Negative form </h1>
                {negativeForm}

                <h1>Interrogative form - Do</h1>
                {questionform}
                </div>
               {notes}
            </article>
        </div>
    )
}

function UsageList({list}) {
 return (   <ul className="usageList">
        {
            list.map(l => <li> {l.type}  {l.shortdescription ?  <i> {l.shortdescription} </i> : null}  { l.example ? <b> {l.example}</b>  : null }       </li>)
        }
    </ul>
 )
}