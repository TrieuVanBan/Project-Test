import React, { useMemo, useState } from 'react'
import classNames from 'classnames/bind';
import styles from '../../layout/layout-web/webLayout.module.scss'
import { Col, Row } from 'antd';
import ImgLogin from '../../assets/image/bg_login.jpg';
import ImgPws from '../../assets/image/bg_changePwd.jpg';
import ImgRegister from '../../assets/image/bg_register.jpg';
import ImgApple from '../../assets/image/img_apple.png';
import ImgAndroid from '../../assets/image/img_android.png';
import ImgQR from '../../assets/image/img_qr.png';
import Logo from '../../assets/image/Logo new.png'
import { Outlet } from 'react-router-dom';
import Languages from '../../commons/langueges';

const cx = classNames.bind(styles);

const WebLayout = () => {
    const [steps, setSteps] = useState<any>({ name: Languages.auth.login });

    const backgroundLayout = useMemo(() => {
        if (steps) {
            switch (steps?.name) {
                case Languages.auth.login:
                    return ImgLogin;
                case Languages.auth.changePwd:
                    return ImgPws;
                case Languages.auth.register:
                default:
                    return ImgRegister;
            }
        }
    }, [steps])

    const renderBackground = useMemo(() => {
        return {
            backgroundImage: `url(${backgroundLayout})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    }, [backgroundLayout]);

    const renderLeftContent = useMemo(() => {
        return <div className={cx('left-content')}
            style={renderBackground}>
            <img className={cx('img-logo')} src={Logo} />
            <span className={cx('style-welcome')}>{Languages.auth.welcome}</span>
            <span className={cx('style-build')}>{Languages.auth.build}</span>
            <span className={cx('style-approach')}>{Languages.auth.approach}</span>
            <span className={cx('style-download')}>{Languages.auth.download}</span>

            <div className={cx('img-download')}>
                <div className={cx('link_down')}>
                    <img src={ImgApple}/>
                    <img src={ImgAndroid}/>
                </div>
                <div>
                    <img src={ImgQR} />
                </div>
            </div>
        </div>
    }, [renderBackground])

    const renderView = useMemo(() => {
        return <div className={cx('row', 'root-container')}>
            <Row gutter={[24, 16]} className={cx('container')}>
                <Col xs={24} md={24} lg={12} xl={16} className={cx('container')}>
                    {renderLeftContent}
                </Col>
                <Col xs={24} md={24} lg={12} xl={8}>
                    <Outlet />
                </Col>
            </Row>
        </div>
    }, [])


    return renderView;
}

export default WebLayout
