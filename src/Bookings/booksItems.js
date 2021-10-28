import classes from './books.module.css'
import { Fragment} from 'react';



const BookItems =(props)=>{
// const getItem = JSON.parse(localStorage.getItem('itemsTotal'))

  return (
        <Fragment > 
        <div className={classes.products}>
        <img  src={props.Image}  alt="Images" style={{'width':'100%'}} />
        <div className={classes.container}>
          <p >{props.Name}</p>
          <h4 >Date:{props.Price}</h4>
          <h3>Ticket:{props.Ticket} x </h3>
          <button onClick={props.delete}>Delete</button>
        </div>
      </div>
</Fragment>

    )
};

export default BookItems;