import images from './CS-GO-image.jpg'
import React from 'react'
import classes from './images.module.css'

const Image = (props) => {
  return (
    <div>
      <img className={classes.Images} src={images} alt="images" />
    </div>
  )
}

export default Image;