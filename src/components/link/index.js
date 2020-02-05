import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

const isInternalLink = link => /^\/(?!\/)/.test(link)

// ---------------------------------------- | Internal Link

const InternalLink = props => (
  <GatsbyLink
    to={props.to}
    className={props.className}
    activeStyle={props.activeStyle}
    activeClassName={props.activeClassName}
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
  to: PropTypes.string.isRequired
}

// ---------------------------------------- | External Link

const ExternalLink = props => (
  <a
    href={props.to}
    target={props.target}
    rel={props.target === "_blank" ? "noopener" : ""}
    className={props.className}
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
  to: PropTypes.string.isRequired
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
  to: PropTypes.string.isRequired
}

Link.defaultProps = {
  target: "_blank"
}

export default Link
export { ExternalLink, InternalLink, isInternalLink }
