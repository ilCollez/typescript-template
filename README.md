# Simple TypeScript Template

This template is based on my personal experience with Node.js and TypeScript.
It provides a simple but complete setup for a general purpose TypeScript app.

## This template includes

-   [TypeScript](https://typescriptlang.org) 4.5
-   [Jest](https://jestjs.io/) for unit testing
-   [Prettier](https://prettier.io/) for code formatting
-   [ESLint](https://eslint.org/) for code linting
-   [Nodemon](https://nodemon.io/) for hot reloading
-   [Husky](https://typicode.github.io/husky/#/) for handling git hooks

This template also includes the `dotenv` package. Just create a `.env` file in the root of your project and add your environment variables, they will be automatically loaded when running `npm run dev`. **NOTE: `dotenv` is installed as a dev dependency, as it is not recommended to use it in production**

## Scripts

-   `npm start`: Starts the application
-   `npm run dev`: Starts `Nodemon` with `ts-node`
-   `npm run build`: Builds the project for production
-   `npm test`: Runs the unit tests with `Jest`
-   `npm run lint`: Runs `ESLint` for code linting
-   `npm run lint:fix`: Runs `ESLint` for code linting and automatically fixes the issues
-   `npm run format`: Runs `Prettier` for code formatting

## Use this template

First of all, you need to clone this repository.

```bash
# Make sure to replace <project-name> with the name of the target folder

# With git
git clone https://github.com/ilCollez/typescript-template.git <project-name>

# With gh (Github CLI)
gh repo clone ilCollez/typescript-template <project-name>
```

Then, install the dependencies witn `npm install`

You are ready to start coding! Run `npm run dev` and edit the `src/main.ts` file :)
