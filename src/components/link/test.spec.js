import React from "react"
import renderer from "react-test-renderer"

import Link from "./"
import { isInternalLink } from "./"

describe("isInternalLink()", () => {
  it("returns true for paths with no extension", () => {
    const result = isInternalLink("/hello/world")
    expect(result).toEqual(true)
  })
  it("returns false for two leading slashes", () => {
    const result = isInternalLink("//hello/world")
    expect(result).toEqual(false)
  })
  it("returns false for domains", () => {
    const result = isInternalLink("https://www.ample.co")
    expect(result).toEqual(false)
  })
  it("returns false for paths with extensions that are not HTML", () => {
    const result = isInternalLink("/hello/world.pdf")
    expect(result).toEqual(false)
  })
  it("returns true for paths with HTML extension", () => {
    const result = isInternalLink("/hello/world.html")
    expect(result).toEqual(true)
  })
})

describe("Link", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Link to="/">Hello</Link>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
