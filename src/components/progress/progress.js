import React from "react";
import { ProgressBar } from "react-bootstrap";
import pStyles from './styles.module.css';

const Progress = (props) => {
    // console.log(props);
    return (
        <div className="d-flex justify-content-center mb-2">
            <div className="py-2">
                <ProgressBar className={`${pStyles.bar} bg-light`} variant="info" now={props.now} />
            </div>
        </div >
    );
};

export default Progress;