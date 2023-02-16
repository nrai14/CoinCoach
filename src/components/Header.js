import {NavLink} from "react-router-dom";

function Header() {
    return (
      <>
       <h1> Header</h1>
       <NavLink className="nav-item nav-link h5" to="/">Home</NavLink>
        <NavLink className="nav-item nav-link h5" to="/about">About</NavLink>
        <NavLink  className="nav-item nav-link h5" to="/contact">Contact</NavLink>
      </>
    );
  }
  
  export default Header;
