
import classes from './ShowBooking.module.css'

const ShowBooking = (props) => {
    return (
       
    <div className={classes.cardWrap}>
    <h2>{props.Name}</h2>
    <h3>${props.runtime}</h3>
    <input type="text" placeholder="Your NAme" name="fname" id="name" required/>
    </div>
    
    )

}

export default ShowBooking
