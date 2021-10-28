import React, { Fragment } from 'react'
import classes from './post.module.css'

const Pagination = (props) => {

  const numPages = Math.ceil(props.products.length/props.resultPerPage )

if (props.currentPage === 1 && numPages > 1) {
  return (

<div className={classes.post}>
<button onClick={() => props.nextPage(1)} className={classes.buttonleft}>Page {props.currentPage+1} </button>
{/* <button   class="next round">&#8250;</button> */}
  </div>
  )
}
if (props.currentPage === numPages && numPages>1) {
  return (
<div className={classes.post}>
<button onClick={() => props.nextPage(-1)} >Page {props.currentPage-1} </button>
  </div>
  )
}
if (props.currentPage < numPages ) {
  return (
    <Fragment>

      <div className={classes.post}>
<button onClick={() => props.nextPage(-1)}>Page {props.currentPage-1} </button>
<button className={classes.buttonright}  onClick={() => props.nextPage(1)}  >Page {props.currentPage+1}</button>
  </div>
  </Fragment>
  )
}



  return (
    <div className={classes.post}>
{}
    </div>
  )
}

export default Pagination
