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
