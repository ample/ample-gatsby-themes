import React from "react"
import containerStyles from "./container.module.css"
export default ({ children }) => (
  <section className={containerStyles.container}>{children}</section>
)