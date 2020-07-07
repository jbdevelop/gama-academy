import React from 'react'

import "./Index.css"

export default function Content() {  
    return (
      <div className="topbar__search">
      <input className="topbar__input" type="text" placeholder="Search" />
      <button className="topbar__button"><i className="fa fa-search"></i></button>
      </div> 
    )  
}