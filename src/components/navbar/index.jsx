import { Menu, Search } from '@material-ui/icons'
import React from 'react';


function Navbar() {




  return (
    <section className="navbar-section">
        <nav className="navbar navbar-dark justify-content-between bg-primary">
            <div className="left ml-3">
                <a href="/" className="navbar-brand">Home</a>
            </div>
            <div className="right text-light">
                <Menu />
            </div>
        </nav> 
       
    </section> 
  )
}

export default Navbar