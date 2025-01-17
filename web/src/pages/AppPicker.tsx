import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Layout, QRCode, RandomGraphicElement } from '../components';
import useStep from '../utils/useStep';
import appStore from '../assets/appStore.svg';
import googlePlay from '../assets/googlePlay.svg';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import dots from '../assets/backgrounds/dots.png';
import circle from '../assets/backgrounds/circleFrame6.svg';
import config from '../config.json';
import { useTranslation, Trans } from 'react-i18next';

const AppPicker: React.FC = () => {
    const { nextStep } = useStep();

    const { t } = useTranslation();

    return (
        <Layout noHeader noFooter>
            <React.Fragment>
                <div className='app-picker'>
                    <RandomGraphicElement elements={5}>
                        <React.Fragment>
                            <h1 className='title'>{t("actions.downloadTheSelvApp")}</h1>
                            <div className='apps'>
                                <div className='scan-wrapper'>
                                    <div className='qr-content-wrapper'>
                                        <p className='scan-note'>
                                            <Trans i18nKey="actions.orScanCode">
                                                Or scan this QR code<br />to download
                                            </Trans>
                                        </p>
                                        <div className='qr-wrapper'>
                                            <QRCode text={`${config.covidDemo}//qr-redirect`} size={200} />
                                        </div>
                                    </div>

                                </div>
                                <div className='scan-wrapper'>
                                    <div className='qr-content-wrapper'>
                                        <p className='scan-note'>
                                            <Trans i18nKey="actions.orScanCode">
                                                Or scan this QR code<br />to download
                                            </Trans>
                                        </p>
                                        <div className='qr-wrapper'>
                                            <QRCode text={`${config.covidDemo}//qr-redirect`} size={200} />
                                        </div>
                                        </div>
                                </div>
                                <div className='scan-wrapper'>
                                    <div className='qr-content-wrapper'>
                                        <p className='scan-note'>
                                            <Trans i18nKey="actions.orScanCode">
                                                Or scan this QR code<br />to download
                                            </Trans>
                                        </p>
                                        <div className='qr-wrapper'>
                                            <QRCode text={`${config.covidDemo}//qr-redirect`} size={200} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={avatar1} alt='' className='avatar1' />
                            <img src={avatar2} alt='' className='avatar2' />
                        </React.Fragment>
                    </RandomGraphicElement>
                    <img src={dots} alt='' className='dots' />
                    <img src={circle} alt='' className='circle' />
                </div>
                    <div className="cta-section" id='app-download'>
                        <p className='subtitle'>{t("pages.demo.appDownloadQR.onceDownloaded")}</p>
                        <Link to={nextStep} className='cta'>
                            <Button>
                                {t("actions.continue")}
                            </Button>
                        </Link>
                    </div>
            </React.Fragment>
        </Layout>
    );
};

export default AppPicker;
