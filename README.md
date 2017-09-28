# cp-website
The source code to generate a static website using GatsbyJS

## Getting Started
1. Ensure you have NodeJS and NPM installed
2. Run `npm install` from the root of the project in your terminal

It might be best to read these docs: https://www.gatsbyjs.org/docs/ if you there is something missing here.

## Make changes to the site

### Components
- In the `src/components` folder
These are normally small parts of the site used in multiple places - like a navigation bar.  If you change these, you will need to do a browser refresh.

### Pages
- In the `src/pages` folder
These are pages that exist on their own (i.e. there isn't more than one of the same) - like the home page.  Changes to files here should be automatically reflected in the browser.

### Templates
- In the `src/templates` folder
These are pages that are re-used for content written outside of this codebase (i.e. from Prismic.io) - like a case study.  Changes to files here need a browser refresh to see the changes in the browser.

### Assets
- In the `src/<something>` folder
I have created a folder for fonts called `fonts` inside `src`.  There isn't really a pattern for this.  At the moment, the fonts are here because they are used across the site.
For assets specific to a page or component, I've put this in the same folder as the page or component - like a logo for the navigation bar.
The CSS is a little messy.  Some styling is in a dedicated SASS file, others are written as Javascript in the file of the component or page.  We should stick to the Javascript method.

## Developing on your local machine
1. Follow the steps from "Getting Started"
2. Run `npm run develop` from the root of the project in your terminal
3. Open a browser to `localhost:8000`, you should see the site running

- If you need to run some GraphQL queries, you can go to `localhost:8000/___graphql`
- When you make a change to any file inside `src/pages`, the browser will reload automatically
- If you want to make changes outside of the `src/pages` folder, but within `src/`, you need to do a browser refresh of the page
- If you want to make changes outside of the `src/` folder, you will need to kill the `npm run develop` command and run it again to see the changes reflected in the browser

## Outputting static content to GitHub Pages
1. Follow the steps from "Getting Started"
2. Run `npm run build` from the root of the project in your terminal
3. The output of the build will be pushed to the `gh-pages` branch on `DaleWebb/cp-website` repo and the site should be at the URL: https://dalewebb.github.io/cp-website


## Troubleshooting

### The develop command has some errors
- As some data to generate the page comes from a online service called Prismic.io, you will need a internet connection.  If this is the problem, there will be a 401 HTTP response error printed in the terminal.
- There might be a problem with the React code written for page templates cannot compile.  If this is the case, the error will be in the terminal and it might be shown in the browser page too.
- There might be a problem with a GraphQL query.  If this is the case, then the error will be reflected in the terminal and browser page.

### The CSS is in more than one place 🤷‍♂️
- The CSS started off in it's own file.  Now it will be written as Javascript in the component or page that uses it - follow this pattern for any new code.

### I don't know how to use GatsbyJS
Here are some docs: https://www.gatsbyjs.org/docs/ there are also some tutorials and sample code.
