# Evaluate News Article With NLP

This project is a project which showcases a client - server architecture to access the aylien api and show the respons in the browser on any article or url you paste into it

## How to run the project

After cloning the repo run `npm i`

Afterwards there are 4 commands which can be used:

`npm run build-dev` - Starts a dev server for the webpage
`npm run build-prod` - creates a production build in the dist folder whic hthen can be served by the server
`npm run test` - runs jest tests
`npm run start` - starts the node server


## How to use

After the project has been build via `npm run build-prod` and the server is started via `npm run start` you can access the page via the url `localhost:8080`
An input field will be shown. Simply paste in a url to an article you want to analyse and press submit. Shortly aafter the page will update and show the result, if the article is positive or negative, with which confidence, and the analysed text.
