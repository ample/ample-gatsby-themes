import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import DropdownMenu from "./menu"
import DropdownTrigger from "./trigger"

import styles from "./styles.module.scss"
import menuStyles from "./menu/styles.module.scss"

const Dropdown = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  const classes = classNames(styles.dropdown, {
    [menuStyles.is_showing]: isOpen,
    [className]: className
  })

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <span
      className={classes}
      role="button"
      tabIndex={0}
      onClick={() => handleClick(isOpen)}
      onKeyPress={() => handleClick(isOpen)}
    >
      {children}
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

export { Dropdown, DropdownMenu, DropdownTrigger }
