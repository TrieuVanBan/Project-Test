import React, { useCallback, useMemo, useRef } from "react";
import IcGoogle from '../../assets/icon/ic_google.svg';
import MyInputText from "../../components/input";
import { TextFieldActions } from "../../components/input/types";
import { TYPE_INPUT } from "../../commons/constants";
import Languages from "../../commons/langueges";
import classNames from 'classnames/bind';
import styles from './forgotPwd.module.scss';
import Button from "../../components/button";
import { Link } from "react-router-dom";
import formValidate from "../../utils/form-validate";
import axios from "axios";

const cx = classNames.bind(styles);
const url = "http://localhost:5000/users";

const ForgotPwd = () => {
    const refPhone = useRef<TextFieldActions>(null);

    const isValidateForm = () => {
        const _phone = refPhone.current?.getValue()

        const errMsgPhone = formValidate.passConFirmPhone(_phone)

        refPhone.current?.setErrorMsg(errMsgPhone)

        return !errMsgPhone
    }

    const submitForm = (e: any) => {
        e.preventDefault();

        if (isValidateForm()) {
            axios.get(url)
                .then((res) => {
                    const isValidUser = res.data.find(
                        (item: any) => {
                            if (item.phone == refPhone.current?.getValue()) {
                                return item.password
                            }
                        }
                    );
                    alert(isValidUser ? `Mật khẩu của bạn là: ${isValidUser.password}` : "Số điện thoại không chính xác");

                });
        }
    }

    const renderInput = useCallback(
        (
            _label: string,
            _ref: any,
            _type: string,
            _placeholder: string,
            _maxLength?: number
        ) => {
            return (
                <MyInputText
                    label={_label}
                    ref={_ref}
                    type={_type}
                    placeHolder={_placeholder}
                    maxLength={_maxLength}
                    important
                />
            );
        },
        []
    );

    const renderButtonLogin = useMemo(() => {
        return (
            <Button
                label={Languages.auth.sendConfirmation}
                containButtonStyles={cx("button-login")}
            />
        )
    }, [])

    return (
        <div className={cx("login")}>
            <p className={cx("title-login")}>{Languages.auth.retrievalPwd}</p>
            <p className={cx("title")}>{Languages.auth.titleRetrievalPwd}</p>
            <form className={cx("form")} onSubmit={submitForm}>
                {renderInput(
                    Languages.auth.phone,
                    refPhone,
                    TYPE_INPUT.PHONE,
                    Languages.auth.phone,
                    10
                )}
                {renderButtonLogin}
                <p>
                    <span>{Languages.auth.noAccount}</span>
                    <Link to={"/"} className={cx("register-now")}>{Languages.auth.login}</Link>
                </p>
            </form>
        </div>
    );
};

export default ForgotPwd;
