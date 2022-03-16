import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import './Main.css';
import TaskPage from '../../view/TaskPage';

const Main = () => {
    return  <div className="container-fluid">
            <div className="row header">
                <div className="col-12">
                    <Header />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-2 sidebar">
                    <Sidebar />
                </div>
                <div className="col-sm-12 col-md-9 col-lg-10 content-area">
                    <TaskPage/>
                </div>
            </div>
            <div className="row footer">
                <div className="col-12">
                    <Footer  />
                </div>
            </div>
            </div>;
}

export default Main;