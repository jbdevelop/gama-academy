import React from 'react'

import Search from '../Search/Index'

import "./Index.css"

export default function Content() {
  
    
    return (
      <>
      <section className="topbar">          
        <div className="topbar__container"> 
          <h1 className="topbar__title">POKEGAMA STORE</h1>  
          <Search />       
        </div>      
      </section>
      </>
    )  

}