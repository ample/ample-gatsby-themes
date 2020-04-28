import React from "react"
import renderer from "react-test-renderer"

import LinkList from "."
import Fixture from "./_fixtures"

describe("LinkList", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<LinkList heading={Fixture.vertical.label} links={Fixture.vertical.items} vertical />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
