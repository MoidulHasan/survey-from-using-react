import React, { useState } from 'react';
import fStyle from './styles.module.css';
import Footer from '../../components/footer/footer';
import Intro from '../../components/intro/intro';
import Progress from '../../components/progress/progress';
import Navigator from '../../components/navigator/navigator';
import SelectQuestion from '../../components/selectQuestion/selectQuestion';
import MultiSelect from '../../components/multiSelectQuestion/multiSelect';
import Summery from '../../components/summery/summery';

const Surveyform = () => {

    const [step, Setstep] = useState(0);
    const [progress, Setprogress] = useState(0);
    const [businessIndustry, SetbusinessIndustry] = useState('');
    const [jobTitle, SetjobTitle] = useState('');
    const [gender, Setgender] = useState('');
    const [age, Setage] = useState('');
    const [interest, Setinterest] = useState([]);
    const [learningMethod, SetlearningMethod] = useState('');

    const onChangeValue = (event) => {
        // console.log(event.target.name);
        if (event.target.name === 'business-industry') {
            SetbusinessIndustry(event.target.value);
            // console.log(businessIndustry);
        }
        else if (event.target.name === 'job-title') {
            SetjobTitle(event.target.value);
        }
        else if (event.target.name === 'gender') {
            Setgender(event.target.value);
        }
        else if (event.target.name === 'age') {
            Setage(event.target.value);
        }
        else if (event.target.name === 'interest') {
            if (interest.indexOf(event.target.value) === -1) {
                Setinterest([...interest, event.target.value]);
            } else {
                interest.splice(interest.indexOf(event.target.value), 1);
                Setinterest([...interest]);
                console.log(interest);
            }
        }
        else if (event.target.name === 'learning-method') {
            SetlearningMethod(event.target.value);
        }
    }
    // proceed to the next step
    const nextStep = (e) => {
        e.preventDefault();
        let nextStep = step + 1;
        if (step < 7) {
            Setstep(nextStep);
        }
        if (step > 0 && step < 6) {
            Setprogress(progress + 20);
        }
    };

    // proceed to the previous step
    const prevStep = (e) => {
        e.preventDefault();
        if (step > 0) {
            Setstep(step - 1);

        }
        if (step > 1) {
            Setprogress(progress - 20);
        }
    };

    // next button text based on step number
    let nextBtnText;
    if (step !== 7) {
        nextBtnText = "Next";
    }
    else if (step === 7) {
        nextBtnText = "View Dashboard";
    }

    const questions = [
        {
            name: 'business-industry',
            title: 'What industry is your business?',
            options: [
                'Advanced manufacturing',
                'Advanced technologies',
                'Agribusiness & food',
                'Arts, culture & creative',
                'Cyber security',
                'Defence',
                'Education',
                'Financial & professional services',
                'Infrastructure & construction',
                'Medical technology',
                'Mining & resources',
                'Renewable energy & sustainability',
                'Retail services',
                'Space',
                'Tourism',
                'Other'
            ]
        },
        {
            name: 'job-title',
            title: 'What is your job title?',
            options: [
                'Business Analyst',
                'Data Analyst',
                'Employee',
                'Engineer',
                'Executive',
                'Human Resources',
                'Manager',
                'Workforce Planner',
                'Renewable energy & sustainability',
                'Other',
            ]
        },
        {
            name: 'gender',
            title: 'What is your gender?',
            options: [
                'Female',
                'Male',
                'Other',
                'Prefer not to say',
            ]
        },
        {
            name: 'age',
            title: 'What is your age range?',
            options: [
                '17 or younger',
                '18-20',
                '21-29',
                '30-39',
                '40-49',
                '50-59',
                '60 or older'
            ]
        },
        {
            name: 'interest',
            title: 'What insights are you interested in?',
            options: [
                'Relevant job profiles & impacts ',
                'Technological impacts ',
                'Creating job opportunities ',
                'Youth employment ',
                'Gender impacts ',
                'Career pathways ',
                'Locational opportunities ',
                'Staff augmentation '
            ]
        },
        {
            name: 'learning-method',
            title: 'How would you like to learn about these topics?',
            options: [
                'Newsletter',
                'Product recommendations',
                'Insight recommendations',
                'Dashboard only'
            ]
        }
    ];


    let formContainer;

    switch (step) {
        case 1:
            formContainer = <SelectQuestion name={questions[0].name} value={businessIndustry} title={questions[0].title} options={questions[0].options} handlechange={onChangeValue} />;
            break;

        case 2:
            formContainer = <SelectQuestion name={questions[1].name} value={jobTitle} title={questions[1].title} options={questions[1].options} handlechange={onChangeValue} />;
            break;
        case 3:
            formContainer = <SelectQuestion name={questions[2].name} value={gender} title={questions[2].title} options={questions[2].options} handlechange={onChangeValue} />;
            break;
        case 4:
            formContainer = <SelectQuestion name={questions[3].name} value={age} title={questions[3].title} options={questions[3].options} handlechange={onChangeValue} />;
            break;
        case 5:
            formContainer = <MultiSelect name={questions[4].name} value={interest} title={questions[4].title} options={questions[4].options} handlechange={onChangeValue} />;
            break;
        case 6:
            formContainer = <SelectQuestion name={questions[5].name} value={learningMethod} title={questions[5].title} options={questions[5].options} handlechange={onChangeValue} />;
            break;
        case 7:
            formContainer = <Summery values={[businessIndustry, jobTitle, gender, age, interest, learningMethod]} />;
            break;
        default:
            break;
    }

    if (step === 0) {
        return (
            <Intro next={nextStep} />
        );
    } else {
        return (
            <div className={`${fStyle.surveyForm} pt-5 d-flex align-items-center flex-column position-relative`}>
                <Progress now={progress} />
                <form className={`container`}>
                    {formContainer}
                </form>
                <Navigator next={nextStep} prev={prevStep} nextBtnText={nextBtnText} />
                <Footer />
            </div>
        );
    }



};

export default Surveyform;