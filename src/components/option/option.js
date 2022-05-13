import React from "react";
import oStyle from './styles.module.css'
import { BsFillCheckCircleFill } from "react-icons/bs";
import Newsletter from '../../images/Newsletter.svg';
import ProductRecommandation from '../../images/Product recommendations.svg';
import InsightRecommendations from '../../images/Insight recommendations.svg';
import DashboardOnly from '../../images/Dashboard only.svg';


const Option = ({ name, value, lavel, selected }) => {


    let select = (selected === value) ? true : false;
    // console.log("selected: ", selected, select);

    const genStyle = name === 'gender' ? 'py-3' : '';

    let imgsrc;
    if (value === 'Newsletter') {
        imgsrc = Newsletter;
    }
    else if (value === 'Product recommendations') {
        imgsrc = ProductRecommandation;
    }
    else if (value === 'Insight recommendations') {
        imgsrc = InsightRecommendations;
    }
    else if (value === 'Dashboard only') {
        imgsrc = DashboardOnly;
    }

    if (imgsrc) {
        return (
            <label for={value} className="col-xs-12 col-sm-6 col-xl-3  m-0 my-3 d-flex justify-content-center align-items-center">
                <div className={`${oStyle.customCard} m-1`}>
                    <div className={`card d-flex justify-content-center align-items-center text-center border-0 w-100 p-2`}>
                        <img className={`card-img-top ${oStyle.customImg}`} src={imgsrc} alt={value} />
                        <div className="card-body">
                            <div className="m-0 d-flex justify-content-center align-items-center fs-6">
                                {lavel} {select && <BsFillCheckCircleFill className={`text-info fs-3 position-absolute top-0 end-0 m-1`} />}
                            </div>
                            <input id={value} className={`${oStyle.radioCustom} m-5`} type="radio" value={value} name={name} />
                        </div>
                    </div>
                </div>
            </label >
        );
    }
    else {
        return (
            <div className={`${genStyle} col-12 col-md-3 d-flex justify-content-center align-items-center text-center border-0 h-100`}>
                <label for={value} className={`${oStyle.option} m-0 d-flex justify-content-center align-items-center p-1 m-0 w-100 m-2`}>
                    {lavel} {select && <BsFillCheckCircleFill className={`text-info fs-3 position-absolute top-0 end-0 m-1`} />}
                </label>
                <input id={value} className={`${oStyle.radioCustom} m-5`} type="radio" value={value} name={name} />
            </div>
        );
    }

};

export default Option;