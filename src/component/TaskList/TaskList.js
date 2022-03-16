import { useState } from "react";
import { TasksJson } from "../../assets/dataSource.js";

const TaskList = () => {
    const taskInitial = () => { 
        return {
            "createdAt": "",
            "description": "",
            "priority": true,
            "completed": true,
            "id": "0"
        }
    }
    const [task, setTask] = useState(taskInitial());
    const tasks=[];
    TasksJson.forEach(obj => {
        tasks.push(obj);
    })

    return      <div className="row">{tasks.map((task) =>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div class="card-group">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Task-{task.id}</h5>
                                        <p class="card-text">{task.description}</p>
                                        {task.completed && (
                                            <><input type="checkbox" checked/></> 
                                        )} 
                                        {!task.completed && (
                                            <><input type="checkbox"/></>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                )}
                </div>
}

export default TaskList;

