# E-Commerce Back End

## Description

This project is a back end for an e-commerce website that uses the latest technologies. The application is built with Express.js, Sequelize, and PostgreSQL, providing RESTful CRUD operations to manage products, categories, and tags. This back end application includes API routes for interacting with the database and supports the following features:

- Connects to a PostgreSQL database using Sequelize
- Allows for database schema and seed commands
- Supports API GET, POST, PUT, and DELETE routes for categories, products, and tags

## Mock-Up
![run-through of utilization](Develop/assets/img/gifgif.gif)
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
- GET `/api/categories` - Get all categories
- GET `/api/categories/:id` - Get a single category by its ID

- POST `/api/categories` - Create a new category
- PUT `/api/categories/:id` - Update a category by its ID
- DELETE `/api/categories/:id` - Delete a category by its ID

**Products**
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get a single product by its ID
- POST `/api/products` - Create a new product
- PUT `/api/products/:id` - Update a product by its ID
- DELETE `/api/products/:id` - Delete a product by its ID

**Tags**
- GET `/api/tags` - Get all tags
- GET `/api/tags/:id` - Get a single tag by its ID
- POST `/api/tags` - Create a new tag
- PUT `/api/tags/:id` - Update a tag by its ID
- DELETE `/api/tags/:id` - Delete a tag by its ID

## Models

**Category**
- `id` - Integer, Primary Key, Auto Increment, Not Null
- `category_name` - String, Not Null

**Product**
- `id` - Integer, Primary Key, Auto Increment, Not Null
- `product_name` - String, Not Null
- `price` - Decimal, Not Null
- stock - Integer, Default 10, Not Null
- `category_id` - Integer, References Category(id)

**Tag**
- `id` - Integer, Primary Key, Auto Increment, Not Null
- `tag_name` - String

**ProductTag**
- `id`- Integer, Primary Key, Auto Increment, Not Null
- `product_id` - Integer, References `Product(id)`
- `tag_id` - Integer, References `Tag(id)`

## Associations
- `Product` belongs to `Category`.
- `Category` has many `Products`.
- `Product` belongs to many `Tags` (through `ProductTag`).
- `Tag` belongs to many `Products` (through `ProductTag`).

## Testing 
Use [Insomnia](https://insomnia.rest/)
 or [Postman](https://www.postman.com/) to test the API routes. Refer to the API Endpoints section for available routes and their descriptions.

**Example Request**

**GET** All Categories
- Request: ` GET http://localhost:3001/api/categories`
- Response:
    ```json
    {
    "id": 1,
    "category_name": "Shirts",
    "products": [
      {
        "id": 1,
        "product_name": "Plain T-Shirt",
        "price": 14.99,
        "stock": 14,
        "category_id": 1
      }
    
**POST** Create a Product
- Request: `POST http://localhost:3001/api/products`
- Body:
    ```json
    {
  "product_name": "Laptop",
  "price": 999.99,
  "stock": 50,
  "category_id": 1,
  "tagIds": [1, 2]
    }
- Response
    ```json
    {
  "id": 6,
  "product_name": "Laptop",
  "price": 999.99,
  "stock": 50,
  "category_id": 1
    }

## Walkthrough Video Link
[Click Here](https://youtu.be/zqTaFpXnZSA)
## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

