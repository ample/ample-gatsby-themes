import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"
import Link from "../link"

import styles from "./styles.module.scss"

const Button = ({ block, className, children, onClick, title, url }) => {
  const classes = classNames(styles.button, {
    [styles[`is_block`]]: block,
    [className]: className
  })

  let button = (
    <Link className={classes} to={url} title={title}>
      {children}
    </Link>
  )

  if (onClick) {
    button = (
      <button className={classes} onClick={onClick} type="button">
        {children}
      </button>
    )
  }

  return button
}

Button.propTypes = {
  /**
   * Specifies if the button is inline or block
   */
  block: PropTypes.bool,
  /**
   * Specifies additional class names
   */
  className: PropTypes.string,
  /**
    Specifies anything between the opening and closing tag. e.g. 'Click Me'
  */
  children: PropTypes.node.isRequired,
  /**
   * Specifies a click Function and uses the button element
   */
  onClick: PropTypes.func,
  /**
   * Specifies the button title attribute
   */
  title: PropTypes.string,
  /**
   * Specifies a location and uses the a element
   */
  url: PropTypes.string
}

Button.defaultProps = {
  url: ""
}

export default Button
