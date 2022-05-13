import React from "react";
// import SingleSelectOption from "../../../components/singleSelectOption/singleSelectOption";
import Option from "../option/option";

const SelectQuestion = ({ title, options, name, handlechange, value }) => {
    return (
        <div>
            <h1 className={`text-center`}>{title}</h1>
            <div className={` my-3`}>
                <div className="d-flex flex-wrap align-items-center justify-content-center px-0 mx-md-5" onChange={handlechange}>
                    {
                        options.map((option) => (
                            <Option name={name} value={option} lavel={option} selected={value} />
                        ))
                    }
                </div>
            </div>
        </div >
    );
};

export default SelectQuestion;