import TaskPage from "./TaskPage";

const ClosedTaskPage = () => {
    return <div>
        <h1>ClosedTaskPage</h1>
        <hr /> <TaskPage  openedTask={false} />
    </div >;
}

export default ClosedTaskPage;