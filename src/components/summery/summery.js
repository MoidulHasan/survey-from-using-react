import React from 'react'
import qsStyle from './styles.module.css'
import groupImg from '../../images/Group 905.png';
import check from '../../images/Check 1.png';

const Summery = (props) => {
    const { values } = props;
    return (
        <div>
            <div className={qsStyle.container}>
                <div className={qsStyle.groupImg}>
                    <img src={groupImg} alt="" />
                </div>
                <div className={qsStyle.text}>
                    <header>Great! Here's a short summary based on your answers.</header>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className={` d-flex ${qsStyle.summary}`}>
                            <img src={check} alt="" />
                            <h2>Your business industry is {values[0]}</h2>
                        </div>
                        <div className={` d-flex ${qsStyle.summary}`}>
                            <img src={check} alt="" />
                            <h2>You are a {values[2]} employee aged {values[3]} years looking to access relevant job profiles and impacts, explore technological impacts on your industry and explore job opportunitites across multiple locations</h2>
                        </div>
                        <div className={` d-flex ${qsStyle.summary}`}>

                            <img src={check} alt="" />
                            <h2>You'd like to receive regular updates about our {values[4]} via a {values[5]}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summery;