import React from "react"
import renderer from "react-test-renderer"

import Dropdown from "./"

describe("Dropdown", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Dropdown trigger={{ label: "Trigger" }}>
          <ul></ul>
        </Dropdown>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
