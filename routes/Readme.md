
# Custom API for CRUD operations

This custom API allows users to perform CRUD (Create, Read, Update, Delete) operations on a table of data. The API can be used to show data in a table, insert new data using API, and mutate an existing item in the table.

## API Endpoints

The API has the following endpoints:

- `GET /users`: This endpoint returns all the users in the table as an array of objects.
- `POST /add-user`: This endpoint is used to add new user to the table. It expects the data to be added in the body of the request as an object.
- `PUT /update-user/:id`: This endpoint is used to update an existing user in the table. It expects the ID of the user to be updated in the URL and the updated user to be passed in the body of the request as an object.
- `DELETE /delete-user/:id`: This endpoint is used to delete an user from the table. It expects the ID of the item to be deleted in the URL.

## Data format

The data in the table is stored as an array of objects. Each object represents a row in the table and has the following properties:

- `id`: a unique identifier for the row
- `name`: a string representing the name of the user
- `email`: a string representing the email of the user
- `age`: a number representing the age of the user

## Getting started

To get started with the API, follow these steps:

- Clone the repository to your local machine.

```
  git clone https://github.com/amJayem/custom-api-crud-operation.git
```
- Go to the project directory

```
  cd custom-api-crud-operation
```

- Install the dependencies by running `npm install / yarn`.


- Start the server by running `npm start / yarn dev`.


- The server will start at http://localhost:3000.

## Examples
## Getting all data from the API

To get all data from the API, make a GET request to http://localhost:3000/users. This will return an array of all the data in the table.

## Adding data to the API

To add new data to the API, make a POST request to http://localhost:3000/add-user with the new data in the body of the request as an object. For example:

```
POST http://localhost:3000/add-user
{
  "name": "New name",
  "email": "test@test.com",
  "age": 10
}
```

## Updating data in the API

To update an existing item in the API, make a PUT request to http://localhost:3000/update-user/:id, where :id is the ID of the item to be updated. The updated data should be passed in the body of the request as an object. For example:

```
PUT http://localhost:3000/update-user/1
{
  "name": "Updated name",
  "email": "a@b.com",
  "age": 5
}
```

## Deleting data from the API
To delete an item from the API, make a DELETE request to http://localhost:3000/delete-user/:id, where :id is the ID of the item to be deleted. For example:

```
DELETE http://localhost:3000/delete-user/1
```

## Conclusion

This custom API provides a simple way to perform CRUD operations on a table of data. It can be used to show data in a table, add new data using API, and update or delete an existing item in the table.

[Live Link](https://job-task-by-devsnest.vercel.app/users)