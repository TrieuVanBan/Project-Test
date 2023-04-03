import React, { useMemo, useState } from 'react'
import classNames from 'classnames/bind';
import styles from '../../layout/layout-web/webLayout.module.scss'
import { Col, Row } from 'antd';
import ImgLogin from '../../assets/image/bg_login.jpg';
import ImgPws from '../../assets/image/bg_changePwd.jpg';
import ImgRegister from '../../assets/image/bg_register.jpg';
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
        return <div style={renderBackground}>
            <img src={Logo}/>
            <span>{Languages.auth.welcome}</span>
            <span>{Languages.auth.build}</span>
            <span>{Languages.auth.approach}</span>

        </div>
    }, [renderBackground])

    const renderView = useMemo(() => {
        return <div className={cx('row')}>
            {/* <Row gutter={[24, 16]}>
                <Col xs={16} md={16} lg={16} xl={16}> */}
                <div className={cx('widthDiv')}>
                    {renderLeftContent}
                </div>
                {/* </Col> */}
                {/* <Col xs={8} md={8} lg={8} xl={16}> */}
                <div className={cx('widthDiv1')}>
                    <Outlet />
                </div>
                {/* </Col>
            </Row> */}


        </div>
    }, [])

    return renderView;
}

export default WebLayout
