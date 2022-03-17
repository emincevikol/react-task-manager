import {
    Link
} from "react-router-dom";
import './sidebar.css';

const Sidebar = () => {
    return <div className="leftside-nav">
            
            <Link to="/CreateTask" >Create Task</Link>
            <Link to="/OpenedTask" >Opened Tasks</Link>
            <Link to="/ClosedTask" >Closed Tasks</Link>
        </div>;
}

export default Sidebar;