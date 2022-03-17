import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import './Main.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import TaskPage from '../../view/TaskPage';
import OpenedTaskPage from '../../view/OpenedTaskPage';
import ClosedTaskPage from '../../view/ClosedTaskPage';
import CreateTaskPage from '../../view/CreateTaskPage';
import HomePage from '../../view/HomePage';

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
                    <div className='row'>
                    <Suspense fallback={
                        <div style={{ fontsize: 99 }}>Loading....
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>}>
                        <Routes>
                            <Route path="/CreateTask" element={(<CreateTaskPage />)} />
                            <Route path="/OpenedTask" element={(<OpenedTaskPage />)} />
                            <Route path="/ClosedTask" element={(<ClosedTaskPage />)} />
                           
                        </Routes>
                    </Suspense>
                </div>
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