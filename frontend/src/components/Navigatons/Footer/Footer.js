import React from 'react';

var style = {
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    padding: "15px",
    left: "0",
    bottom: "0",
    height: "50px",
    zIndex: 1,
};

const Footer = () => {

    return (
        <div>
            <footer className="main-footer" style={style}>
                <strong>Copyright &copy; {new Date().getFullYear()} <a className="text-info" href="#" target={"_blank"}>Automation Solution</a>.</strong>
                    All rights reserved.

                </footer>

            {/*Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/*Control sidebar content goes here */}
            </aside>
        </div>
    );
}


export default Footer;
