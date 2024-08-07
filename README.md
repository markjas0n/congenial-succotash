# E-Commerce Back End

## Description

This project is a back end for an e-commerce website that uses the latest technologies. The application is built with Express.js, Sequelize, and PostgreSQL, providing RESTful CRUD operations to manage products, categories, and tags. This back end application includes API routes for interacting with the database and supports the following features:

- Connects to a PostgreSQL database using Sequelize
- Allows for database schema and seed commands
- Supports API GET, POST, PUT, and DELETE routes for categories, products, and tags

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Associations](#associations)
- [Testing](#testing)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.comyour-username-ecommerce-backend.git

2. Navigate to the project directory:
    ```bash
    cd ecommerce-backend

3. Install dependencies:
    ```bash
    npm i

4. Create a 'env' file in the root directory and add your PostgreSQL database with credentials:
    ```bash
    DB_NAME='ecommerce_db'
    DB_USER='your_postgresql_username'
    DB_PASSWORD='your_postgresql_password'

## Usage

1. Ceate the database:
    ``` bash
    psql -U your_postgresql_username -f db/schema.sql

2. Seed the database with sample data:
    ```bash
    npm run seed
3. Start the server: 
    ```bash
    npm start

## API Endpoints

**Categories** 
- GET /api/categories - Get all categories
- GET /api/categories/:id - Get a single category by its ID

- POST /api/categories - Create a new category
- PUT /api/categories/:id - Update a category by its ID
- DELETE /api/categories/:id - Delete a category by its ID

**Products**
- GET /api/products - Get all products
- GET /api/products/:id - Get a single product by its ID
- POST /api/products - Create a new product
- PUT /api/products/:id - Update a product by its ID
- DELETE /api/products/:id - Delete a product by its ID

**Tags**
- GET /api/tags - Get all tags
- GET /api/tags/:id - Get a single tag by its ID
- POST /api/tags - Create a new tag
- PUT /api/tags/:id - Update a tag by its ID
- DELETE /api/tags/:id - Delete a tag by its ID

## Models

**Category**
- id - Integer, Primary Key, Auto Increment, Not Null
- category_name - String, Not Null

**Product**
-
-
-
-
-
