import React from "react"
import { Link } from "gatsby"

import styles from "../styles/sassy.module.css"

class IndexComponent extends React.Component {
  render() {
    return (
      <div className={styles.page}>
        <h1 className={styles.header}>Hello sassy world</h1>
        <Link to="/" className={styles.link}>
          Back home
        </Link>
      </div>
    )
  }
}

export default IndexComponent