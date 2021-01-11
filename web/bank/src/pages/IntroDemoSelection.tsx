import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import useStep from '../utils/useStep';
import covid from '../assets/demos/covid.png';
import selv from '../assets/demos/selv.png';
import { Disclaimer, RandomGraphicElement } from '../components';
import dots from '../assets/backgrounds/dots.png';
import ellipse from '../assets/backgrounds/ellipse1.svg';
import logo from '../assets/landing/logoHeader.svg';
import { covidDemo } from '../config.json';
import { useTranslation } from 'react-i18next';

/**
 * Component which will display a IntroDemoSelection.
 */
const IntroDemoSelection: React.FC = ({ match }: any) => {
    const { nextStep } = useStep(match);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <RandomGraphicElement elements={7}>
            <div className='theme-demo'>
                <Link to={'/'} className="logo demo-page">
                    <img src={logo} alt="Selv logo" />
                </Link>
                <div className='demo-intro app' id='app'>
                    <div className='demo-select-wrapper'>
                        <div className='demo-card-wrapper'>
                            <img src={selv} alt="Selv demo" />
                            <div className="demo-card-content">
                                <h3>{t("general.digitalIdentityManagement")}</h3>
                                <p>{t("general.claimControlReuse")}</p>
                                <Link to={nextStep}>
                                    <Button className='cta'>
                                        {t("actions.tryTheDemo")}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='demo-card-wrapper'>
                            <img src={covid} alt="Covid-19 demo" />
                            <div className="demo-card-content">
                                <h3>{t("pages.demo.introDemoSelection.healthStatusManagement")}</h3>
                                <p>{t("pages.demo.introDemoSelection.shareTrustedCredentials")}</p>
                                <a href={`${covidDemo}/demo/app`} rel='noopener noreferrer'>
                                    <Button className='cta'>
                                        {t("actions.tryTheDemo")}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={dots} alt='' className='dots-top' />
                    <img src={dots} alt='' className='dots-bottom' />
                    <img src={ellipse} alt='' className='ellipse' />
                    <Disclaimer />
                </div>
            </div>
        </RandomGraphicElement>
    );
};

export default IntroDemoSelection;
