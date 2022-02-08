import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {CheckPermisionAction} from "../../../constants/CustomMethod"
const sideBar = props => {

    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* <!-- Brand Logo --> */}

                <NavLink to="#" className="brand-link">
                    <span className="brand-text font-weight-light"><b>Automation Solutionz</b></span>
                </NavLink>


                {/* <!-- Sidebar --> */}
                <div className="sidebar">
                    {/* <!-- Sidebar user panel (optional) --> */}
                    {/* "/static/dist/img/avatar5.png" */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            {/* <img src={props.auth.user.user_photo} style={{ width: "65px", height: "65px" }} className="rounded-circle elevation-2"
                                alt="" /> */}
                        </div>
                        <div className="info">
                            <NavLink to="/" className="d-block"></NavLink>
                            <p style={{ color: "white", fontSize: 14 }}>
                               Test User
                            </p>
                        </div>
                    </div>


                    {/* <!-- Sidebar Menu --> */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                           
                                <li className="nav-item has-treeview">
                                    <a href="/product-list" className="nav-link">
                                        <i className="fas fa-angle-right left"></i>
                                        <p>Product List</p>
                                    </a>
                                   
                                </li>
                           
                           


                          







                        </ul>
                    </nav>
                    {/* <!-- /.sidebar-menu --> */}
                </div>
                {/* <!-- /.sidebar --> */}
            </aside>
        </div >
    )
}




export default sideBar;
