import React from "react"
import renderer from "react-test-renderer"

import SEO from "./"

describe("SEO", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SEO title="Hello" url="/" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
