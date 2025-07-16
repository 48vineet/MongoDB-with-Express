# MongoDB with Express - Mini WhatsApp Clone

This repository contains a simple web application that functions as a mini WhatsApp clone, demonstrating the integration of MongoDB with Express.js. Users can view, create, edit, and delete chat messages.

## Features

* **View All Chats**: Display all existing chat messages.
* **Create New Chat**: Add new chat messages with a sender, receiver, and message content.
* **Edit Chat**: Modify the content of an existing chat message.
* **Delete Chat**: Remove a chat message.
* **Database Integration**: Stores chat messages in a MongoDB database.
* **Templating**: Uses EJS for rendering dynamic views.
* **RESTful API**: Implements various routes for CRUD operations on chat messages.

## Technologies Used

* **Node.js**: JavaScript runtime environment.
* **Express.js**: Web application framework for Node.js.
* **Mongoose**: MongoDB object data modeling (ODM) library for Node.js.
* **MongoDB**: NoSQL database for storing chat messages.
* **EJS**: Embedded JavaScript templates for dynamic HTML generation.
* **Method-Override**: Enables the use of PUT and DELETE HTTP methods in forms.

## Setup and Installation

To set up and run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies**:
    This project uses `ejs`, `express`, `method-override`, `mongoose`, and `path` as dependencies.
    ```bash
    npm install
    ```

3.  **Start MongoDB**:
    Ensure that you have MongoDB installed and running on your system. The application connects to a MongoDB instance at `mongodb://127.0.0.1:27017/whatsapp`.

4.  **Initialize Database (Optional)**:
    You can seed the database with some initial chat data by running the `init.js` script. This script connects to the MongoDB database named 'whatsapp' and inserts a predefined set of chat messages.
    ```bash
    node init.js
    ```

5.  **Start the Express application**:
    The application listens on port 3000.
    ```bash
    node index.js
    ```

## Usage

Once the server is running, you can access the application through your web browser:

* **Homepage**: Access the application at `http://localhost:3000/`. You will see a "Working" message.
* **All Chats**: View all chat messages by navigating to `http://localhost:3000/chats`. This page displays chat details including sender, message, receiver, and timestamps, with options to edit or delete.
* **New Chat**: To create a new chat, go to `http://localhost:3000/chats/new`. You will find a form to input the sender's name ("Who are you"), message content ("Write your msg here..."), and receiver's name ("Add Receiver").
* **Edit Chat**: From the "All Chats" page, click the "Edit" button next to a chat to modify its message content. The edit page shows the chat ID, sender, and receiver, allowing you to update the message.

## API Endpoints

The application exposes the following API endpoints:

* **GET `/`**: Returns a simple "Working" message.
* **GET `/chats`**: Retrieves and displays all chat messages from the database.
* **GET `/chats/new`**: Renders the form to create a new chat.
* **POST `/chats`**: Creates a new chat message and saves it to the database. Redirects to the `/chats` page upon successful creation.
* **GET `/chats/:id/edit`**: Renders the form to edit a specific chat message identified by its ID.
* **PUT `/chats/:id`**: Updates the message of a specific chat identified by its ID. Redirects to the `/chats` page upon successful update.
* **DELETE `/chats/:id`**: Deletes a specific chat message identified by its ID. Redirects to the `/chats` page upon successful deletion.

## Database Schema

The `Chat` model defines the schema for chat messages stored in MongoDB:

```javascript
const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        maxLength: 50
    },
    created_at: {
        type: Date,
        required: true
    }
});
