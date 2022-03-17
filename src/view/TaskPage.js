import { useState } from "react";
import TaskList from "../component/TaskList/TaskList";

const TaskPage = (props) => {
    return <div>
        <h1>Task Page</h1>
        <hr />
        <TaskList openedTask={props.openedTask}/>
    </div >;
}

export default TaskPage;