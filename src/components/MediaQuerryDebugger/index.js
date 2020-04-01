import React, { useState } from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import styles from './styles.module.scss'

const MediaQueryDebugger = ( props ) => {
  
  if (props.isVisible != 'true') return null

  const [isOpen, setOpen] = useState(false)

  const classes = classNames(styles.debug, isOpen, {
    [styles.is_showing]: isOpen
  })

  return (
    <div role="button" className={classes} tabIndex={0} onKeyDown={() => {setOpen(!isOpen)}} >
      <div className={styles.debug_media_queries} />
    </div>
  )
}

MediaQueryDebugger.propTypes = {
  // a string determines whether or not the component should be visible
  isVisible: propTypes.string
}

export default MediaQueryDebugger