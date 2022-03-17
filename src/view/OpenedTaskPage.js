import TaskPage from "./TaskPage";

const OpenedTaskPage = () => {
    return <div>
        <h1>OpenedTaskPage</h1>
        <hr /> <TaskPage openedTask={true}/>
    </div >;
}

export default OpenedTaskPage;