import React from "react"
import PropTypes from "prop-types"
import icons from "./icons"

const Icon = ({ className, name }) => {
  return <span className={className}>{icons[name]}</span>
}

Icon.propTypes = {
  /**
   * Adds CSS classes to the wrapping element.
   */
  className: PropTypes.string,
  /**
   * Specifies the name of the icon
   */
  name: PropTypes.string.isRequired
}

Icon.defaultProps = {}

export default Icon
