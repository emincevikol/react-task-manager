export const TASK_ACIONS = Object.freeze({
    ADD: "add-task",
    DELETE: "delete-task",
    EDIT: "edit-task",
    BULK_INSERT: "bulk-insert-task"
});

export const taskAddAction = (task) => {
    return {
        // type: "add-task",
        type: TASK_ACIONS.ADD,
        payload: task
    }
}
export const taskDeleteAction = (taskId) => {
    return {
        type: TASK_ACIONS.DELETE,
        payload: taskId
    }
}
export const taskEditAction = (task) => {
    return {
        type: TASK_ACIONS.EDIT,
        payload: task
    }
}

export const taskReducer = (state, action) => {
    const { type, payload } = action;
    const { task, count } = state;
    switch (type) {
        case TASK_ACIONS.ADD:
                task.push(payload);
            return { task }
        case TASK_ACIONS.DELETE:
            return { task }
        case TASK_ACIONS.EDIT:
            return { task }
        default:
            return state;
    }
}