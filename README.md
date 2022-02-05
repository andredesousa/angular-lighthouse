# Auditing an Angular app with Google Lighthouse

This project provides a basic setup for auditing Angular websites using [Lighthouse](https://github.com/GoogleChrome/lighthouse).
Lighthouse is an open-source, automated tool for improving the performance, quality, and correctness of your web sites.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13 and [Node.js](https://nodejs.org/en/about/releases) version 14.

## Overview

Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.
The tool audits the accessibility and SEO of your webpage, with a particular focus on [Core Web Vitals](https://web.dev/i18n/pt/vitals/).
These metrics have become increasingly important for website owners that want to provide a good user experience and rank higher on Google.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.

The next scripts should be executed in a console inside the root directory:

- `start` - Runs the application.
- `check` - Runs all checks.
- `lint` - Runs several static code analysis.
- `lint:fix` - Applies lint rules to project code.
- `test` - Runs the unit tests.
- `test:watch` - Runs the unit tests.
- `test` - Runs the unit tests.
- `audit` - Runs the audit tests.
- `build` - Builds the dist files.
- `release` - Builds an Docker image.

For more details, read the [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) documentation.

## Linting and formatting code

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.
Use `npm run lint` to analyze your code.
Many problems can be automatically fixed with `npm run lint:fix`.

## Running unit tests

Unit tests are responsible for testing of individual functions or classes by supplying input and making sure the output is as expected.
Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
Run `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

You can see the HTML coverage report opening the [index.html](build/coverage/lcov-report/index.html) file in your web browser.
Code coverage measures and reports the number of executed code lines covered by automated tests.

## Running audit tests

Use `npm run audit` to execute the audit tests via Lighthouse and Testcontainers.

After running the audit of your webpage, Lighthouse will generate a report on 4 different areas:

- **Performance** includes elements that slow your page down, including images and resources.
- **Accessibility** audits how accessible your content is to users, including the use of assistive technology.
- **Best Practices** identifies any web development element that does not follow best practices.
- **SEO** highlights the most essential SEO issues with the webpage.

The HTML report is available in the `build/audit` folder and you can opening it in your web browser.
Lighthouse generates a HTML file for each page.

## Reference documentation

For further reference, please consider the following articles:

- [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts)
- [Web Vitals](https://web.dev/i18n/en/vitals/)
- [Measure the performance of a web application with Lighthouse CI](https://medium.com/tuimm/measure-performance-web-app-with-lighthouse-ci-in-a-gitlab-pipeline-dd292842e40d)
- [A Performance and Optimization Tool for Webpages](https://betterprogramming.pub/lighthouse-a-performance-and-optimization-tool-for-webpages-e0b4eeaef3e4)
- [Automating Google Lighthouse audits](https://keepinguptodate.com/pages/2021/07/automating-google-lighthouse-upload-to-azure/)
