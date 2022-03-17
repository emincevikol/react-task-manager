
npm install react-bootstrap bootstrap@5.1.3

npm install react-router-dom

npm start

# DAY-1

You are exptected to complete tasks below:

- Create new React JS application named task-manager

- Import react-bootstrap library

- Create Folder structure described in below

Src
    assets
    components
    layouts
    views

- create sidebar component inside layout folder. it will have three link named: Create Task, Open Tasks, Closed Tasks

- create header component inside layout folder. it will have title "Task Manager"

- create footer component inside layout folder. it will have text "X tasks in total | Y taks done"

- create main component inside layout folder. it should have header, sidebar and footer component inside and a content - page area working responsively. on small 
devices, sidebar and content should be full width on larde devices, sidebar and content should be inline

# DAY-2

- You will be given tasks data as JS object array.

- Create a TaskPage component under view folder

- Create TaskList component under components folder

- TaskPage contains TaskList component

- On TaskList component tasks data should be iterated each task should be represented on the grid layout taking 

    3 column on large, 4 column on medium, 12 column on small screens

- A task should be represented in Task component

- Tasks data should be handled by useReducer hook

- TaskReducer should have add, edit, delete, bulk-insert actions
