# Learn - Node.js by creating APIs for CRUD Operations

This repository contains code examples for backend CRUD (Create, Read, Update, Delete) operations, based on the [Node.js tutorial for beginners](https://www.youtube.com/watch?v=w-7RQ46RgxU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp) by Shaun Pelling (iamshaunjp).


## Instructions to run the application
Follow these instructions to get the application running:
1. Click the green **Code** button on the GitHub repository page and download the ZIP file.
2. Extract the contents of the ZIP file.
3. Open the extracted folder in your preferred IDE (such as VS Code).
4. Install Node.js version 14.21.3:
   - `nvm install v14.21.3`
   - `nvm use v14.21.3`
5. Install necessary packages:
   - `npm install`
6. Start the application:
   - To run the project : `npm start`


## Code Workflow
- [**app.js**](./app.js): Initializes the application, sets up the Express app, connects to MongoDB using Mongoose, calls required middleware including `body-parser` and custom route middleware defined in [**ninja.routes.js**](./ninja.routes.js), and listens on the specified port.
- [**ninja.model.js**](./ninja.model.js): Defines the data structure (Schema) to be stored in MongoDB using Mongoose. This model is then created and exported.
- [**ninja.routes.js**](./ninja.routes.js): Uses Express and the model created in `ninja.model.js` to set up the application routes.


## Basic CRUD Operations
Test these CRUD operations using a tool like Postman. The operations include:
- **Create**: `POST` to `http://localhost:4000/api/ninjas` to add a new ninja to the database.
- **Read**: `GET` from `http://localhost:4000/api/ninjas` to retrieve all ninjas, or `GET` from `http://localhost:4000/api/ninjas?lng=13.7&lat=45.3` to find ninjas near specific longitude and latitude.
- **Update**: `PUT` to `http://localhost:4000/api/ninjas/:id` to update details of a specific ninja by ID.
- **Delete**: `DELETE` from `http://localhost:4000/api/ninjas/:id` to remove a ninja by ID from the database.


## Dependencies used
- [**Express**](https://www.npmjs.com/package/express): A web application framework for Node.js, that simplifies routing, middleware, and other server-side logic.
- [**Mongoose**](https://www.npmjs.com/package/mongoose): An ODM (Object Data Modeling) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
- [**Body-parser**](https://www.npmjs.com/package/body-parser): A Node.js middleware that parses incoming request bodies before your handlers, available under the `req.body` property, and is based on body parsing middleware.
- [**Nodemon**](https://www.npmjs.com/package/nodemon): A utility that monitors for any changes in your source and automatically restarts your server. Ideal for development.