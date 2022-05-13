import React from "react";
import Checkbox from "../checkbox/checkbox";
// import Checkbox from "../../../components/checkbox/checkbox";

const MultiSelect = ({ title, options, name, handlechange, value }) => {


    return (
        <div>
            <h1 className={`text-center`}>{title}</h1>
            <h4 className={`text-center`}>You can select a few:</h4>
            <div className={`container-fluid my-3`}>
                <div className="d-flex flex-wrap align-items-center justify-content-center px-md-5 mx-md-5" onChange={handlechange}>
                    {
                        options.map((option) => (
                            // <Checkbox name={name} value={option} lavel={option} selected={value} />
                            <Checkbox name={name} value={option} lavel={option} selected={value} />
                        ))
                    }
                </div>
            </div>
        </div >

    );
};

export default MultiSelect;