import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>
{
	return(<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <Link className="navbar-brand" to="#">Fixed navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div ClassName="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       
	  <Link className="nav-link" to="/process">Increment</Link>
	  </li>
      
	   <li className="nav-item">
	  <Link className="nav-link" to="/1">Comp</Link>
	  </li> 
	  <li className="nav-item">
	  <Link className="nav-link" to="/localdata">LocalData</Link>
	  </li> 
    <li className="nav-item">
	  <Link className="nav-link" to="/joke">Joke</Link>
	  </li> 
    <li className="nav-item">
	  <Link className="nav-link" to="/stories">Stories</Link>
	  </li> 

	  <li className="nav-item">
	  <Link className="nav-link" to="/custom">Custom</Link>
	  </li> 
   
   
    </ul>
	</div>
</nav>
);
}


export default Header;