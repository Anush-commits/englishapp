import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'

export default function Header(props) {
    return (
       <>
           
               <li> <Link to={props.where}> {props.link} </Link> </li>
           <Switch>
           <Route exact path={props.where} component={props.comp}/>
           </Switch>
      </>
    )
}
