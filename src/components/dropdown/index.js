import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import Button from "../button"
import Icon from "../icon"
import Link from "../link"

import styles from "./styles.module.scss"
import menuStyles from "./menu/styles.module.scss"

const Dropdown = ({ children, className, trigger }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [childrenFocused, setChildrenFocused] = useState(false)

  const classes = classNames(styles.dropdown, {
    [menuStyles.is_open]: isOpen,
    [className]: className
  })

  const handleClick = (event) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  const handleBlur = () => {
    if (!childrenFocused) setIsOpen(false)
    setChildrenFocused(false)
  }

  const handleChildrenMousedown = () => {
    setChildrenFocused(true)
  }

  const TriggerTagName = trigger.button ? Button : Link

  return (
    <span className={classes} onBlur={handleBlur}>
      <TriggerTagName
        to=""
        className={styles.dropdown_trigger}
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        <>
          <span>{trigger.label}</span>
          <Icon name="arrow-down" />
        </>
      </TriggerTagName>

      <div className={styles.dropdown_menu} onMouseDown={handleChildrenMousedown}>
        {children}
      </div>
    </span>
  )
}

Dropdown.propTypes = {
  /** Element(s) to render to the screen */
  children: PropTypes.node.isRequired,
  /** CSS class to apply to the wrapping element */
  className: PropTypes.string
}

export default Dropdown
