# Ample Component Library

Ample's component library is a set of React components that are designed to make you a happy developer!

Note: These components are intended to be used with Gatsby. Your mileage may vary is using outside the context of a Gatsby site.

You can find the documentation for this library here: https://gatsby-theme-ample-components.netlify.com/.

## Installation

Install the library in your Gatsby project:

    $ yarn add gatsby-theme-ample-components

Then add it to the plugins section of your `gatsby-config.js` file:

```js
// gatsby-config.js
plugins: [
  // ...
  `gatsby-theme-ample-components`
]
```

## Contributing

After adding your code, [open a pull request](https://github.com/ample/gatsby-theme-ample-components/compare) for your code to be reviewed.

This will trigger a build via [the Netlify site](https://app.netlify.com/sites/gatsby-theme-ample-components), which runs the following commands:

    $ yarn lint
    $ yarn test
    $ yarn build

You may want to run those commands locally to make sure you're buttoned up before submitting a PR. Any addition or change to the components in this library should contain:

- Relevant `propTypes` and `defaultProps` properties on all components.
- Documentation of your work in all apropriate `notes.mdx` files. These are the files that are rendered as the doc site, which is built using [Docz](https://www.docz.site/).
- Specs for any logic-based methods.

## License

Licensed under the [MIT License](./LICENSE).
