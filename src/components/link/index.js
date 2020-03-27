import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import URL from "url"
import * as path from "path"

const isInternalLink = link => {
  const url = URL.parse(link)
  // If the link is a URL, it is external.
  if (url.host) return false
  // If the link begins with "//" it is treated as an external link.
  if (url.path.slice(0, 2) === "//") return false
  // We now are left with an internal path. But it is treated as an external
  // link if it points to a non-HTML file.
  const ext = path.parse(url.path).ext
  return !ext || ext === ".html"
}

// ---------------------------------------- | Internal Link

const InternalLink = props => (
  <GatsbyLink
    to={props.to}
    className={props.className}
    activeStyle={props.activeStyle}
    activeClassName={props.activeClassName}
    onClick={props.onClick && props.onClick.bind(this)}
  >
    {props.children}
  </GatsbyLink>
)

InternalLink.propTypes = {
  /**
   * Passed to Gatsby's <Link /> component. [See here for more info](https://www.gatsbyjs.org/docs/gatsby-link/#add-custom-styles-for-the-currently-active-link).
   */
  activeClassName: PropTypes.string,
  /**
   * Passed to Gatsby's <Link /> component. [See here for more info](https://www.gatsbyjs.org/docs/gatsby-link/#add-custom-styles-for-the-currently-active-link).
   */
  activeStyle: PropTypes.object,
  /**
   * Text or elements to render inside the link.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * The "class" attribute that gets passed to Gatsby's <Link /> component.
   */
  className: PropTypes.string,
  /**
   * The path of the link.
   */
  to: PropTypes.string.isRequired,
  /**
   * Event handler for the onClick event
   */
  onClick: PropTypes.func
}

// ---------------------------------------- | External Link

const ExternalLink = props => (
  <a
    href={props.to}
    target={props.target}
    rel={props.target === "_blank" ? "noopener" : ""}
    className={props.className}
    onClick={props.onClick && props.onClick.bind(this)}
  >
    {props.children}
  </a>
)

ExternalLink.propTypes = {
  /**
   * Text or elements to render inside the link.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * The "class" attribute of the anchor.
   */
  className: PropTypes.string,
  /**
   * The "target" attribute of the anchor.
   */
  target: PropTypes.string,
  /**
   * The URL of the link.
   */
  to: PropTypes.string.isRequired,
  /**
   * Event handler for the onClick event
   */
  onClick: PropTypes.func
}

// ---------------------------------------- | Link Component

const Link = props =>
  isInternalLink(props.to) ? <InternalLink {...props} /> : <ExternalLink {...props} />

Link.propTypes = {
  activeClassName: PropTypes.string,
  activeStyle: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Link.defaultProps = {
  target: "_blank"
}

export default Link
export { ExternalLink, InternalLink, isInternalLink }
