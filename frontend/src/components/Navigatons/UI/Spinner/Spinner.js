import React from "react";

const spinner = () => {
    return (
        <div>
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
};

export default spinner;