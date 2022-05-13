import React from "react";
import cStyle from './styles.module.css'
import { BsFillCheckCircleFill, BsCircle } from "react-icons/bs";

const Checkbox = ({ name, value, lavel, selected }) => {

    let select = selected.indexOf(value) === -1 ? false : true;

    // const icon = selected.indexOf(value) === -1 ? '<BsCircle className={`text-info fs-3 position-absolute end-0 m-1`} />' : '<BsFillCheckCircleFill className={`text-info fs-3 position-absolute end-0 m-1`} />'


    return (
        <div className={`col-10 col-md-5  d-flex justify-content-center align-items-center text-center border-0`}>
            <label for={value} className={`${cStyle.option} m-0 d-flex justify-content-center align-items-center p-2 m-0 w-100 m-2`}>{lavel} {select && <BsFillCheckCircleFill className={`text-info fs-3 position-absolute end-0 m-1`} />} {!select && <BsCircle className={`text-info fs-3 position-absolute end-0 m-1`} />} </label>
            <input id={value} className={`${cStyle.checkboxCustom} m-5`} type="checkbox" value={value} name={name} />
        </div >
    );
};

export default Checkbox;