import React from 'react'
import './nav.css'
export default function Index() {
  return (
    <>
      <nav class="navbar sticky-top">
          <form class="search-bar">
            <input type="text" className='input-field' placeholder="search any thing" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
            
          </form>
      </nav>
      
    </>
  );
}
