import React, { useState } from 'react';
import fStyle from './styles.module.css';
import Footer from '../../components/footer/footer';
import Intro from '../../components/intro/intro';
import Progress from '../../components/progress/progress';


const Surveyform = () => {

    const [step, Setstep] = useState(0);
    const [progress, Setprogress] = useState(0);

    return (
        <div className={`${fStyle.surveyform} pt-5`}>
            <Progress now={progress} />
            <form>

            </form>
            <Footer />
        </div>
    );
};

export default Surveyform;