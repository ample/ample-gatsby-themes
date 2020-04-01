import React from "react"
import renderer from "react-test-renderer"
import MediaQueryDebugger from "./index"

describe("MediaQueryDebugger", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<MediaQueryDebugger isVisible={'true'}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
