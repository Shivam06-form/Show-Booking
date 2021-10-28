import classes from './books.module.css'
import { Fragment} from 'react';



const BookItems =(props)=>{
// const getItem = JSON.parse(localStorage.getItem('itemsTotal'))
const getItems= JSON.parse(localStorage.getItem('show')) 

let shows=[];
const deleteItem = (e)=> {
  e.preventDefault()
  const deleteItems = getItems.filter(item => item.Name !== props.Name)
  for (const key in deleteItems) {
    shows.push({
      id: deleteItems[key].id,
      Name: deleteItems[key].Name,
      thumbnail:deleteItems[key].thumbnail,
      Date: deleteItems[key].Date,
      tickets:deleteItems[key].value,
    })
    console.log(getItems, deleteItems)
  }
  window.location.reload(false);
  localStorage.setItem('show',JSON.stringify(shows))
}

  return (
        <Fragment > 
        <div className={classes.products}>
        <img  src={props.Image}  alt="Images" style={{'width':'100%'}} />
        <div className={classes.container}>
          <p >{props.Name}</p>
          <h4 >Date:{props.Price}</h4>
          <h3>Ticket:{props.Ticket} x </h3>
       <button onClick={deleteItem} >Delete</button> 
        </div>
      </div>
</Fragment>

    )
};

export default BookItems;