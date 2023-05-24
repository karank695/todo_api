# todo_api
Postman collection link is here for getting reference of api's https://www.postman.com/krn0869/workspace/todos-api/collection/26990851-76107c8a-27f5-4895-b56b-615bec46e17c?action=share&creator=26990851<br>
1. for getting todo list we can use api with <b>get</b> method http://localhost:8000/todo<br>
response will be<br>
{
    "data": [
        {
            "id": 2,
            "todo": "Assignment completion",
            "completed": 0,
            "user_email": "krn0861@gmail.com"
        }

    ]
}<br><br>
2. for adding todo in list we can use api with <b>post</b> method http://localhost:8000/todo/create<br>
response will be<br>
{
    "message": "added successfully",
    "data": {
        "todo": "Dancing at 4pm",
        "completed": false,
        "id": 5
    }
}
<br><br>
3. for updating todo we can use api with <b>put</b> method http://localhost:8000/todo/2<br>
response will be<br>
if data will present in database<br>
{
    "message": "updated successfully",
    "data": [
        {
            "id": 2,
            "todo": "Assignment completion",
            "completed": 0,
            "user_email": "krn0861@gmail.com"
        }
    ]
}<br>
if data will not present in database
{
    "message": "data not found"
}
     <br>
4. for deleting todo we can use api with <b>delete</b> method http://localhost:8000/todo/1<br>
response will be<br>
{
    "message": "deleted successfully"
}
