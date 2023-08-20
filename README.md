# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Before you begin, Make sure you have Node.js installed. You can download it from the official website: https://nodejs.org/en/download/

## Installation

Clone the repository to a local directory using Git or download the source code as a ZIP file and extract it.

In the project directory, Install the required dependencies by running the following command:

### `npm install`

## Running the App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## API Endpoint Information

The app uses environment variables to store API Endpoints. You can find that on `.env` file in the root directory of the project.

`REACT_APP_COVID_CASES_API_URL=API_URL_HERE`
`REACT_APP_COUNTRY_BASED_CASES_API_URL=API_URL_HERE`
`REACT_APP_WORLD_WIDE_CASES_API_URL=API_URL_HERE`

`REACT_APP_COVID_CASES_API_URL`: This endpoint is used to fetch cases data with date from the API. It provides information about COVID-19 cases on each dates.

`REACT_APP_COUNTRY_BASED_CASES_API_URL`: This endpoint is used to fetch country-based cases data from the API. It provides information about COVID-19 cases for specific countries.

`REACT_APP_WORLD_WIDE_CASES_API_URL`: This endpoint is used to fetch world-wide cases data from the API. It provides an overview of world-wide COVID-19 cases.

## Conclusion

You should now have your React app up and running, fetching data from the specified API endpoints.