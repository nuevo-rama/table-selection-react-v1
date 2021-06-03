import React from "react";


const Header = () => (
    <div>
    <section className="leftHeader"> </section>
    <section className= "centerHeader">
        <nav role="navigation">
  <ul>
    <li><a href="#">Diseñá tu Skateboard</a></li>
    <li><a href="#" aria-haspopup="true">Tablas</a>
      <ul aria-label="submenu">
        <li><a href="#">Popsicle</a></li>
        <li><a href="#">Shaped</a></li>
        <li><a href="#">Cruiser</a></li>
        <li><a href="#">Longboard</a></li>
      </ul>
    </li>
    <li><a href="#" aria-haspopup="true">Partes y Accesorios</a>
        <ul aria-label="submenu">
            <li><a href="#">Ruedas</a></li>
            <li><a href="#">Rulemanes</a></li>
            <li><a href="#">Trucks</a></li>
            <li><a href="#">Accesorios</a></li>
        </ul>
    </li>
    
  </ul>
</nav>
    </section>
    <section className="RightHeader"> </section>
</div>
)

export default Header;