
import React from "react"
import renderer from "react-test-renderer"

import Image from "./"

const validFluidSrc = {
  childImageSharp: {
    fluid: {
      base64:
        "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABomEmDP8A/8QAGBABAAMBAAAAAAAAAAAAAAAAAgEDEhH/2gAIAQEAAQUCbjTs5W69r//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/ASf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwFn/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECMREhUv/aAAgBAQAGPwKL5ZLDd6Lo/8QAHBABAAIBBQAAAAAAAAAAAAAAAQAhQRExYbHB/9oACAEBAAE/Iate+KigVZiOuI2419n/2gAMAwEAAgADAAAAEHv/AP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QH//EABYRAQEBAAAAAAAAAAAAAAAAAAABQf/aAAgBAgEBPxDCP//EABoQAQACAwEAAAAAAAAAAAAAAAEAESExgbH/2gAIAQEAAT8QeAVBsG1Xe4UtiQ2Mj0lCyg8PSn//2Q==",
      aspectRatio: 3.5,
      src:
        "/static/2eb58d5c70b74dbe16389cd05d535312/f2e3f/,thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.jpg",
      srcSet:
        "/static/2eb58d5c70b74dbe16389cd05d535312/e2788/thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.jpg 360w,↵/static/2eb58d5c70b74dbe16389cd05d535312/7d509/thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.jpg 720w,↵/static/2eb58d5c70b74dbe16389cd05d535312/f2e3f/thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.jpg 1400w",
      srcWebp:
        "/static/2eb58d5c70b74dbe16389cd05d535312/9592d/thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.webp",
      srcSetWebp:
        "/static/2eb58d5c70b74dbe16389cd05d535312/b6bb8/thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.webp 360w,↵/static/2eb58d5c70b74dbe16389cd05d535312/2aa8d/thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.webp 720w,↵/static/2eb58d5c70b74dbe16389cd05d535312/9592d/thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.webp 1400w",
      sizes: "(max-width: 1400px) 100vw, 1400px",
      originalName: "thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.jpg"
    }
  }
}

const validFixedSrc = {
  childImageSharp: {
    fixed: {
      base64:
        "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAbxEyBn/xAAYEAEBAQEBAAAAAAAAAAAAAAACAQMSIv/aAAgBAQABBQLRyx6+WO1//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BJ//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AWf/xAAZEAEAAgMAAAAAAAAAAAAAAAABABECUWH/2gAIAQEABj8COUzNF3Luf//EABsQAQACAgMAAAAAAAAAAAAAAAEAESExQbHB/9oACAEBAAE/IcGNuDVhkDyRLmodX7P/2gAMAwEAAgADAAAAEIgf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxAf/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8Qg//EABoQAQEAAwEBAAAAAAAAAAAAAAERACExQbH/2gAIAQEAAT8QB9pFBts9yQRrxRtOuPYIedo+ln//2Q==",
      width: 1000,
      height: 286,
      src:
        "/static/2eb58d5c70b74dbe16389cd05d535312/a7715/thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.jpg",
      srcSet:
        "/static/2eb58d5c70b74dbe16389cd05d535312/a7715/thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.jpg 1x",
      srcWebp:
        "/static/2eb58d5c70b74dbe16389cd05d535312/e30b5/thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.webp",
      srcSetWebp:
        "/static/2eb58d5c70b74dbe16389cd05d535312/e30b5/thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.webp 1x",
      originalName: "thisisengineering-raeng-b-ilt-cmx-iw-re-unsplash.jpg"
    }
  }
}

describe("Image", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Image src="https://via.placeholder.com/300" alt="Image from https://placehold.it" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("will render null if the src object is not the correct format", () => {
    const src = { childImageSharp: { wrongKey: { src: "..." } } }
    const tree = renderer.create(<Image src={src} alt="alt ..." />).toJSON()
    expect(tree).toBeNull()
  })
  it("will render with a proper fluid image", () => {
    const tree = renderer.create(<Image src={validFluidSrc} alt="alt ..." />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("will render with a proper fixed image", () => {
    const tree = renderer.create(<Image src={validFixedSrc} alt="alt ..." />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
