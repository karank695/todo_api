# todo_api
Postman collection link is here for getting reference of api's https://www.postman.com/krn0869/workspace/todos-api/collection/26990851-76107c8a-27f5-4895-b56b-615bec46e17c?action=share&creator=26990851<br>
<h2>Note:</h2><br>
For deleting,updating, creating todo you must need to register by using api http://localhost:8000/register<br>
for this you need to pass your email and password to get token which will be valid for 2 minute.<br>
in body you can enter your email and password<br>
{
    "email":"krn0869@gmail.com",
    "password":"123"
}<br>
After this you have to enter this token as Bearer token in header <br>
<b>Authorization</b> <b>Bearer &lt; token &gt; </b>

<br>
<hr>
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
