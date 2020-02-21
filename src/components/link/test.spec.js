import React from "react"
import renderer from "react-test-renderer"

import Link from "./"
import { isInternalLink } from "./"

describe("isInternalLink()", () => {
  it("returns true for links with leading slashes", () => {
    const result = isInternalLink("/hello/world")
    expect(result).toEqual(true)
  })
  it("returns false for links with TWO leading slashes", () => {
    const result = isInternalLink("//hello/world")
    expect(result).toEqual(false)
  })
  it("returns false for links leading with a protocol", () => {
    const result = isInternalLink("https://www.ample.co")
    expect(result).toEqual(false)
  })
})

describe("Link", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Link to="/">Hello</Link>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
