import React from "react";
import { Link,NavLink} from "react-router-dom";


const Header = ()=>{
 return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <Link to={"/"} className="navbar-brand">Accounts App</Link>
   <ul className="navbar-nav ml-auto">

<NavLink to={"/"} exact activeClassName={"activeLink"} className="nav-link" >Accounts 
<div class="alert alert-primary" role="alert">
Accounts Home
</div></NavLink>


<NavLink to={"/add"} className="nav-link" activeClassName={"activeLink"}>Add Accounts
<div class="alert alert-primary" role="alert">
  Add your Accounts
</div></NavLink>

<NavLink to={"/edit"} activeClassName={"activeLink"} className="nav-link" >Edit/delete
<div class="alert alert-primary" role="alert">
Edit od Delete
</div></NavLink>

</ul>

  </nav>
 )
}
export default Header;