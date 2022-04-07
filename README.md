# Auditing an Angular app with Google Lighthouse

This project provides a basic setup for auditing Angular websites using [Lighthouse](https://github.com/GoogleChrome/lighthouse).
Lighthouse is an open-source, automated tool for improving the performance, quality, and correctness of your web sites.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13 and [Node.js](https://nodejs.org/en/about/releases) version 14.

## Overview

As a website owner, maximizing your site’s Search Engine Optimization (SEO), accessibility, and performance is of utmost importance.
However, to tackle these factors as efficiently as possible, it’s crucial to adopt the right tools and techniques.

Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.
The tool audits the accessibility and SEO of your webpage, with a particular focus on [Core Web Vitals](https://web.dev/i18n/pt/vitals/).
These metrics have become increasingly important for website owners that want to provide a good user experience and rank higher on Google.
You can run it via Chrome DevTools, Chrome extension, Node module, or via web User Interface.

In this project, you will use Lighthouse programmatically with Jest.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.

The next scripts should be executed in a console inside the root directory:

- `start` - Runs the application.
- `check` - Runs all checks.
- `lint` - Runs several static code analysis.
- `lint:fix` - Applies lint rules to project code.
- `test` - Runs the unit tests.
- `test:watch` - Runs the unit tests.
- `audit` - Runs the audit tests.
- `audit:watch` - Runs the audit tests in watch mode.
- `build` - Builds the dist files.
- `release` - Builds the Docker image.

For more details, read the [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) documentation.

## Linting and formatting code

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.
[ESLint](https://eslint.org/) helps maintain the code quality.

Use `npm run lint` to analyze your code.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save.

## Running unit tests

Unit tests are responsible for testing of individual functions or classes by supplying input and making sure the output is as expected.

Use `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
Use `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

You can see the HTML coverage report opening the [index.html](build/coverage/lcov-report/index.html) file in your web browser.
Code coverage measures and reports the number of executed code lines covered by automated tests.

## Running audit tests

Audit tests are responsible for auditing the accessibility and SEO of your webpage, with a particular focus on [Core Web Vitals](https://web.dev/i18n/en/vitals/).

Use `npm run audit` to execute the audit tests via [Lighthouse](https://github.com/GoogleChrome/lighthouse) and [Testcontainers](https://www.testcontainers.org/).
Use `npm run audit:watch` to keep executing your tests while watching for file changes in the background.
First of all, you need to build the docker image to start the container during testing.
You can use `npm run release` command for this purpose.

After running the audit of your webpage, Lighthouse will generate a report on 4 different areas:

- **Performance** includes elements that slow your page down, including images and resources.
- **Accessibility** audits how accessible your content is to users, including the use of assistive technology.
- **Best Practices** identifies any web development element that does not follow best practices.
- **SEO** highlights the most essential SEO issues with the webpage.

The HTML report is available in the `build/audit` folder and you can opening it in your web browser.
Lighthouse generates a HTML file for each page.

## Debugging

You can debug the client-side Angular code, adding breakpoints, inspect variables and see the call stack of the client-side Angular application.
These functionalities are provided natively or based on plugins.
[Angular DevTools](https://angular.io/guide/devtools/) is a Chrome extension that provides debugging and profiling capabilities for Angular applications.

You can use our IDE for debugging unit and audit tests.
Also, you can debug tests with `debugger` keyword if you Use `npm run test:debug` or `npm run audit:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.
These functionalities are provided natively or based on plugins.

## Build

Use `ng build` to build the project. The build artifacts will be stored in the `build/app/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
