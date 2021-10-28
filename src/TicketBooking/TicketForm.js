import React, {  useEffect, useState }  from 'react';



import classes from './TicketForm.module.css'

let shows =[];


const DemoSignUpForm = (props) => {
const [date , setdate ] = useState('')

  const showCartLocalStorage =()=>{    
 const localShows =localStorage.getItem('show')
return localShows ? JSON.parse(localShows):[]
  
}







const onSubmit = (e) => {
  e.preventDefault()
  shows.push(
    {
      id: props.id,
      Name: props.Name,
      thumbnail:props.thumbnail,
      Date: date,
      tickets:props.value,
    //  delete:deleteItem
    })  
    
    localStorage.setItem('show',JSON.stringify(shows))
  
  }
  
  useEffect(() => {
    showCartLocalStorage()
  }, [])
  
  
  
  const ondateChange=(date)=> {
    setdate(date.target.value)
}


  
  return (

      <form className={classes.form}  onSubmit={onSubmit}>
      <h2>{props.Name}</h2>
      <div className={classes.imgcontainer} >
      <img className={classes.avatar} src={props.thumbnail} alt="Avatar" />
      </div>
       <div className={classes.container}>
       <label htmlFor="number" className={classes.urn}> <b>Seats</b> </label>
       <input  type="number" placeholder="Number of Seats" name="fname" required  min="1" max="10" 
        onChange={props.onChange} value={props.ticket}/>
       <label htmlFor="datemin"className={classes.urn}> Select date </label>
       <input type="date" id="datemin" name="datemin" min="2021-10-02" required value={date} 
       onChange={ondateChange}/>
       <label htmlFor="number" className={classes.urn}><b>💲{props.Price}</b> </label>
       <button type="submit" >Confirm </button>  
       </div>
       <div className={classes.container} >
      <button className={classes.cancelbtn} type="button" onClick={props.onClose}>Cancel</button>
      </div>
    </form>

  )


}

export default DemoSignUpForm;