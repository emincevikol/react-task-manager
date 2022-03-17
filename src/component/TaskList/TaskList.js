import { useReducer } from "react";
import { TasksJson } from "../../assets/dataSource.js";
import { bulkInsertAction, taskReducer } from "./TaskListUseReducer.js";

const TaskList = ( props ) => {
    
const taskStateInitial = { tasks: TasksJson, count: 0 };
const [taskState, taskDispatch] = useReducer(taskReducer, taskStateInitial);
    
/*const BulkInsert = () => {
    taskDispatch(bulkInsertAction(TasksJson));
}*/
    console.log(props)
        return  <div className="row">
                    {taskState.tasks.filter(task => task.completed===props.openedTask).map(filteredTask => (
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Task-{filteredTask.id}</h5>
                                        <p className="card-text">{filteredTask.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>  
}

export default TaskList;

