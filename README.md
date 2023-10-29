# TrackMe
TrackMee is a simple task website, where can add new task, edit, delete and update task separately. Responsive and Modern UI designs for better user experiance with smooth backend.

# Functionality
- Add New Task
- Delete Task
- Update Task
- Toggle Status Of Task

# Deployed Link 
- https://trackmee.netlify.app/

# Homepage
### Web View
- ![home](https://imgur.com/DfOqZjd.png)

### Mobile View
![home](https://imgur.com/mc9JpGm.png)

# Run On Local 

## Client 
- npm start (client will run on port 3000 default)

## Server
- npm start (server will run on port 8080 default)
- For running server, It requires some env variables  (MongoDB URL) and it's not their for security purpose.
- Use this URL as Server (https://cyan-difficult-yak.cyclic.app)

## Endpoints
- /api/tasks - for listing all existing task
- /api/tasks/update/:id - for updating task status & editing the current task
- /api/tasks/delete/:id - for deleting the tasks


