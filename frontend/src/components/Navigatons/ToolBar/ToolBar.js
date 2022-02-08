import React, { Component } from 'react';
import { connect } from 'react-redux';


class Toolbar extends Component {
    render() {
        return (
            <div>
                <nav className="main-header navbar navbar-expand navbar-dark navbar-info shadow">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="/"><i className="fas fa-bars" /></a>
                        </li>

                    </ul>

                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="/">
                                <i className="far fa-user" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <div className="dropdown-divider" />

                                <a href="/" className="dropdown-item">
                                    <i className="fas fa-file mr-2" />Test User
                                </a>
                                <div className="dropdown-divider" />
     
                            </div>
                        </li>

                    </ul>
                </nav>
                {/* /.navbar */}

            </div>
        )
    }
}




export default Toolbar;
