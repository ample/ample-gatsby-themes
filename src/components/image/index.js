import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import classNames from "classnames/bind"
import dig from "object-dig"
import styles from "./styles.module.scss"

const Image = ({ alt, background, className, src, width, ...props }) => {
  const classes = classNames(styles.image, {
    [styles.has_background]: background,
    [className]: className
  })

  // ---------------------------------------- | Gastby Image

  if (dig(src, "childImageSharp", "fluid") || dig(src, "childImageSharp", "fixed")) {
    return (
      <div className={classes}>
        <Img alt={alt} width={width} {...src.childImageSharp} />
      </div>
    )
  }

  // ---------------------------------------- | Native Image

  if (typeof src === "string") {
    return (
      <div className={classes}>
        <img src={src} width={width} alt={alt} {...props} />
      </div>
    )
  }

  // ---------------------------------------- | Invalid src

  return null
}

Image.propTypes = {
  /**
   * Specifies if the component has background artwork.
   */
  background: PropTypes.bool,
  /**
   * Classes attributed to the wrapping element.
   */
  className: PropTypes.string,
  /**
   * Specifies the image src attribute as a string or Gatsby fixed/fluid image
   * object ([Gatsby Docs](https://www.gatsbyjs.org/packages/gatsby-image/)).
   */
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  /**
   * Specifies the image alt attribute.
   */
  alt: PropTypes.string,
  /**
   * Specifies the image width, if needed.
   */
  width: PropTypes.string
}

Image.defaultProps = {
  background: false
}

export default Image
