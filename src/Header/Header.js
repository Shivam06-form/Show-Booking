
import {Link} from 'react-router-dom'
import classes from './Header.module.css'
import {  ImCart} from "@react-icons/all-files/im/ImCart";


const Header =()=>{

  
return(
<div className={classes.header} >
  <ul>
    <li>
<h2 className={classes.heading}>Therater 24X7</h2>
    </li>
    <li>
    <h3>
      <Link to='/Shopping-Cart/CartItems'><span>Bookings <ImCart /></span> </Link>  
    </h3>
    </li>
    <li>
    <h3>
      <Link to='/Shopping-Cart/'><span>Home </span> </Link>  
    </h3>
    </li>
  </ul>
</div>
)
};

export default Header;