# Smart Team Task Manager - Test Cases

## 1. Introduction

This document describes five test cases for the Smart Team Task Manager API.

The purpose of these tests is to verify the main API operations related to tasks and users.

## 2. Test Cases

### Test Case 1: Get All Tasks

- **Test ID:** TC-01
- **Endpoint:** GET /api/tasks
- **Description:** Verify that the API returns the list of all tasks.
- **Precondition:** The API server is running.
- **Expected Result:** The API returns the list of tasks successfully.
- **Expected Status Code:** 200 OK

### Test Case 2: Get Task By ID

- **Test ID:** TC-02
- **Endpoint:** GET /api/tasks/{id}
- **Description:** Verify that a specific task can be retrieved using its ID.
- **Precondition:** A task with the specified ID exists.
- **Expected Result:** The API returns the requested task.
- **Expected Status Code:** 200 OK

### Test Case 3: Create a New Task

- **Test ID:** TC-03
- **Endpoint:** POST /api/tasks
- **Description:** Verify that a new task can be created.
- **Precondition:** The API server is running and the request contains valid task data.
- **Expected Result:** A new task is created successfully.
- **Expected Status Code:** 201 Created

### Test Case 4: Update an Existing Task

- **Test ID:** TC-04
- **Endpoint:** PUT /api/tasks/{id}
- **Description:** Verify that an existing task can be updated.
- **Precondition:** A task with the specified ID exists.
- **Expected Result:** The task information is updated successfully.
- **Expected Status Code:** 200 OK

### Test Case 5: Delete an Existing Task

- **Test ID:** TC-05
- **Endpoint:** DELETE /api/tasks/{id}
- **Description:** Verify that an existing task can be deleted.
- **Precondition:** A task with the specified ID exists.
- **Expected Result:** The task is deleted successfully.
- **Expected Status Code:** 204 No Content

## 3. Test Summary

| Test ID | Operation | Expected Status |
|---|---|---|
| TC-01 | Get All Tasks | 200 OK |
| TC-02 | Get Task By ID | 200 OK |
| TC-03 | Create Task | 201 Created |
| TC-04 | Update Task | 200 OK |
| TC-05 | Delete Task | 204 No Content |

## 4. Conclusion

These five test cases cover the main task management operations of the Smart Team Task Manager API.

They help verify that the API endpoints work according to the defined API contract.
