import React from "react"
import { Link } from "gatsby"

import indexStyles from "../styles/index.module.css"

class IndexComponent extends React.Component {
  render() {
    return (
      <div className={indexStyles.index}>
        <h1>Hello world</h1>
        <h2 className={indexStyles.subheader}>
          {`You've`} arrived at an example of a CSS Module on Gatsby
        </h2>
      </div>
    )
  }
}

export default IndexComponent