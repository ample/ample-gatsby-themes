import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"
import Link from "../link"
import DropDown from "./drop-down"
import Button from "../button"

import styles from "./styles.module.scss"

const LinkList = ({ className, heading, links = [], vertical }) => {
  const [currentDropDown, setDropDown] = useState(null)

  const handleMouseEnter = index => {
    setDropDown(index)
  }

  const handleMouseLeave = () => {
    setDropDown(null)
  }

  const handleClick = index => {
    setDropDown(currentDropDown === index ? null : index)
  }

  const classes = classNames(styles.cl_link_list, className, {
    [styles[`cl_link_list_is_vertical`]]: vertical
  })

  return (
    <ul className={classes}>
      {heading && (
        <li>
          <strong>{heading}</strong>
        </li>
      )}

      {links.map((item, index) => {
        if (item.children && item.children.length > 0) {
          return (
            <DropDown
              key={index}
              item={item}
              isShowing={index == currentDropDown}
              onClick={() => handleClick(index)}
              handleMouseEnter={() => handleMouseEnter(index)}
              handleMouseLeave={handleMouseLeave}
            />
          )
        } else if (item.button) {
          return (
            <li key={index}>
              <Button className={item.className} to={item.url}>
                {item.label}
              </Button>
            </li>
          )
        } else {
          return (
            <li key={index}>
              <Link className={item.className} title={item.title} to={item.url}>
                {item.label}
              </Link>
            </li>
          )
        }
      })}
    </ul>
  )
}

LinkList.propTypes = {
  /**
   * Specifies if a link should render as a button
   */
  button: PropTypes.bool.isRequired,
  /**
   * Specifies additional class names
   */
  className: PropTypes.string,
  /**
   * Specifies the heading of a list
   */
  heading: PropTypes.string,
  /**
   * Specifies an array of Links
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      button: PropTypes.bool,
      className: PropTypes.string,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          button: PropTypes.bool,
          className: PropTypes.string,
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired,
  /**
   * Specifies if the direction of the link list should be vertical
   */
  vertical: PropTypes.bool
}

LinkList.defaultProps = {
  button: false,
  vertical: false
}

export default LinkList
