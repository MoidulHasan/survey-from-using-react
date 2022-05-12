import React from 'react';
import iStyle from './styles.module.css';
import women from '../../images/women.png';
import wave from '../../images/footer-wave.svg';
import dashboard from '../../images/sample-page.png';

const Intro = (props) => {

    const { next } = props;

    return (
        <div>
            <div className={`row ${iStyle.container}`}>
                <div className={`col-3 ${iStyle.women}`}>
                    <img src={women} alt="women" />
                </div>
                <div className={`col-6 col-md-6 text-center pt-3 p-0 ${iStyle.text}`}>
                    <h2 >We’re here to help you.</h2>
                    <h2 >To do that, let’s get to know you better.</h2>
                    <h4 >Please complete a short survey to personalise your experience with us.</h4>
                    <div className={iStyle.Btn}>
                        <button onClick={next} className={iStyle.nextBtn} type="button" >Next</button>
                    </div>
                </div>
                <div className={`col-3  ${iStyle.dashboard}`}>
                    <img className="pt-3 pe-3" src={dashboard} alt="dashboard" />
                </div>
            </div>
            <div className={iStyle.wave}>
                <img src={wave} alt="wave" />
            </div>
        </div >
    );
};

export default Intro;