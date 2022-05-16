import React from "react";

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container" >

  <div className="container-fluid">
    <a className="navbar-brand" href="/">Hooks CRUD</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
     
      </ul>
    </div>
  </div>


  </div>
</nav>
    )
}

export default Navbar;