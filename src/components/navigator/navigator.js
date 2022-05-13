import React from 'react';

const Navigator = ({ prev, next, nextBtnText }) => {
    return (
        <div>
            <div className="d-flex justify-content-center pt-0 my-5">
                <button onClick={prev} className="btn btn-light px-4 border">
                    <i className="fa fa-angle-left fs-2 text-info fw-3" />
                </button>
                <button onClick={next} className="btn btn-info px-4 border-0 text-light ms-2 fs-3">
                    {nextBtnText}
                </button>
            </div >
        </div>
    );
};

export default Navigator;