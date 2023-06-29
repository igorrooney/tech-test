# Qured Frontend Assignment

## Prerequisites
  - node 18.x or greater
  - yarn

## Getting started
  - Clone this repository to your machine.
  - Install the dependencies by running `yarn install`.
  - Start the app by running `yarn run dev`. Any changes you make will be automatically updated.

## Objective
The main objective of the task is to **retrieve data from the API** route `api/patients` and display the API response **in a form of a table**. [Figma wireframes](https://www.figma.com/file/juR9hCjXWDdcCmx6jrpQGy/Tech-Test-WIreframes)

`src/pages/index.tsx` is the entry point for the application. You can start working on the task from here or create a new page. The API route is already created for you in `src/pages/api/patients.ts` *(there should be no need to modify this file)*

## Project Details
  - The project is a basic [Next.JS](https://nextjs.org/docs/getting-started) && [Typescript](https://www.typescriptlang.org/docs/) project, with more information available at [Next.JS Documentation](https://nextjs.org/docs/getting-started).
  - The wireframes for the table can be found at [Figma](https://www.figma.com/file/juR9hCjXWDdcCmx6jrpQGy/Tech-Test-WIreframes)
  - The candidate is encouraged to use the dependencies listed in the `package.json` file to complete the task. *Additional libraries may be installed if necessary*, with the candidate explaining the need for such libraries. 
  - Information on data fetching in Next.js can be found in the [Next.js Data Fetching Overview.](https://nextjs.org/docs/basic-features/data-fetching/overview)

## Requirements

  - The table should have a similar look and feel as designed on Figma.
  - The project should be accessible.
  - The project should be built using Chakra UI, though the candidate is free to build components from scratch if they prefer to avoid using Chakra UI.

## Submission
  - The candidate should create a new branch from the `main` branch and push their code to the new branch.
  - The candidate should create a pull request from their branch to the `main` branch.
  - The candidate should share the link to the pull request with the Qured team.

## Note
  - The candidate should not worry about implementing pagination, search, add or filter features. However, adding these UI components as part of the assignment would be a plus.