import React, { Component } from 'react';
import ToolBar from '../../components/Navigatons/ToolBar/ToolBar';
import SideBar from '../../components/Navigatons/SideDrawer/sideDrawer';
import Footer from "../../components/Navigatons/Footer/Footer";


class Layout extends Component {

    render() {
        const { children } = this.props;
        return (
            <div className="wrapper">
                <ToolBar />
                <SideBar />

                <div className="content-wrapper">

                    <div className="content">
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>

                </div>

                <Footer />

            </div>
        )
    };
};

// Layout.prototypes = {
//     loadUser: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//     auth: state.auth.user
// });

export default Layout;
