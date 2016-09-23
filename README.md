# Bookshelf - Books For People

## Getting Started
First, install NPM dependencies:
`$ npm install`
You'll also need a local mongo for running tests:
```
$ brew install mongo
$ mkdir -p ~/data/db # Create local directory for mongo to store data
$ mongod --dbpath ~/data/db # Run MongoDB server
```

## Running the server
`$ npm start`

## Running tests
`$ npm test`
