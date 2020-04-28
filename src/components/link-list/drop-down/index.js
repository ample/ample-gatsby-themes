import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"
import Icon from "../../icon"
import Link from "../../link"

import styles from "./styles.module.scss"

const DropDown = ({ item, isShowing, handleMouseEnter, handleMouseLeave, onClick }) => {
  const [dropDownIsOpen, setDropDown] = useState(false)

  const handleDropDownClick = () => {
    setDropDown(!dropDownIsOpen)

    if (onClick) {
      onClick()
    }
  }

  const classes = classNames(styles.has_drop_down, {
    [styles.is_showing]: dropDownIsOpen
  })

  return (
    <li className={classes}>
      <a
        className={styles.drop_down_link}
        href={item.url}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleDropDownClick}
      >
        <span>{item.label}</span>
        <Icon name="arrow-down" />
      </a>
      {isShowing ? (
        <ul
          className={styles.drop_down}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.children.map((child, index) => {
            return (
              <li key={index}>
                {child.url && (
                  <Link className={child.className} title={child.title} to={child.url}>
                    <span>{child.label}</span>
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      ) : null}
    </li>
  )
}

DropDown.propTypes = {
  /**
   * Specifies each link
   */
  item: PropTypes.object.isRequired,
  /**
   * Specifies if the drop down is showing
   */
  isShowing: PropTypes.bool.isRequired,
  /**
   * Specifies a function for when the mouse enters the drop down
   */
  handleMouseEnter: PropTypes.func.isRequired,
  /**
   * Specifies a function for when the mouse leaves the drop down
   */
  handleMouseLeave: PropTypes.func.isRequired,
  /**
   * Specifies a function for when the user clicks the drop down
   */
  onClick: PropTypes.func.isRequired
}

DropDown.defaultProps = {}

export default DropDown
