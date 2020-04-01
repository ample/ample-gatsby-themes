import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const MediaQueryDebugger = () => {
  if (process.env.GATSBY_DEBUG_MEDIA_QUERIES !== 'true') return null

  const [isOpen, setOpen] = useState(false)

  const classes = classNames(styles.debug, isOpen, {
    [styles.is_showing]: isOpen
  })

  return (
    <div className={classes} onClick={() => {setOpen(!isOpen)}}>
      <div className={styles.debug_media_queries} />
    </div>
  )
}

export default MediaQueryDebugger