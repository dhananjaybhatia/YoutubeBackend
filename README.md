# YoutubeBackend - Basic CRUD Application

This project is a basic CRUD (Create, Read, Update, Delete) web application built using Node.js, Express, MongoDB, and Tailwind CSS. The application allows users to create, view, update, and delete users, and it utilizes EJS for rendering dynamic HTML views.

## Features

- **Create User**: Add new users by providing their name, email, and profile image.
- **Read Users**: View a list of all users.
- **Update User**: Modify existing user information.
- **Delete User**: Remove a user from the system.

## Technologies Used

- **Node.js**: JavaScript runtime used to build the server-side of the application.
- **Express.js**: Web framework for Node.js used to create the server and handle routes.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **EJS (Embedded JavaScript)**: Templating engine used for rendering HTML pages.
- **Tailwind CSS**: Utility-first CSS framework for styling the UI.
- **Nodemon**: Utility for automatically restarting the server when code changes.

##Folder Structure
├── models
│   └── user.js          # Mongoose schema for the User model
├── public
│   ├── stylesheets
│   │   └── style.css    # Custom CSS for the app
├── views
│   ├── edit.ejs         # EJS template for editing a user
│   ├── index.ejs        # EJS template for displaying all users
│   └── read.ejs         # EJS template for reading user details
├── app.js               # Main server file
├── .env                 # Environment variables
├── README.md            # Documentation
├── package.json         # Project configuration and dependencies

