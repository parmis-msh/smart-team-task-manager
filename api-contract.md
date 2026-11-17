API Contract – Smart Team Task Manager

1. Resources

The main resources of the project are:

- Tasks: Manage team tasks.
- Users: Manage system users.

2. API Endpoints

Tasks Resource

Endpoint| Method| Description| Status Code
/api/tasks| GET| Get all tasks| 200
/api/tasks/{id}| GET| Get a task by ID| 200
/api/tasks| POST| Create a new task| 201
/api/tasks/{id}| PUT| Update a task| 200
/api/tasks/{id}| DELETE| Delete a task| 204

Users Resource

Endpoint| Method| Description| Status Code
/api/users| GET| Get all users| 200
/api/users/{id}| GET| Get a user by ID| 200
/api/users| POST| Create a new user| 201
/api/users/{id}| PUT| Update a user| 200
/api/users/{id}| DELETE| Delete a user| 204

3. Architecture Diagram

       Client
         |
         v
      REST API
         |
    -------------
    |           |
  Tasks       Users
  Service     Service
    |           |
    -------------
         |
      Database

4. Architecture Description

The system uses a REST API architecture.

The client sends HTTP requests to the REST API. The API processes requests related to Tasks and Users and communicates with the database.

This API Contract defines the initial structure of the project.
