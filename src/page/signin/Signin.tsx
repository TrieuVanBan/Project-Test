// import React from 'react'

// type Props = {}

// const Signin = (props: Props) => {
//   return (
//     <>
//         <p>Signin</p>
//     </>
//   )
// }

// export default Signin

import React, { useCallback, useMemo, useRef } from "react";
import IcGoogle from '../../assets/icon/ic_google.svg';
import MyInputText from "../../components/input";
import { TextFieldActions } from "../../components/input/types";
import { TYPE_INPUT } from "../../commons/constants";
import Languages from "../../commons/langueges";
import classNames from 'classnames/bind';
import styles from './Signin.module.scss';
import Button from "../../components/button";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Signin = () => {
  const refPhone = useRef<TextFieldActions>(null);
  const refPassword = useRef<TextFieldActions>(null);

  const renderInput = useCallback(
    (
      _label: string,
      _ref: any,
      _type: string,
      _placeholder: string,
      _maxLength?: number
      // _important: string
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
        label={Languages.auth.login}
        containButtonStyles={cx("button-login")}
      />
    )
  }, [])

  const renderButtonGoogle = useMemo(() => {
    return (
      <Button
        label={Languages.auth.loginGoogle}
        containButtonStyles={cx("button-google")}
        rightIcon={IcGoogle}
      />
    )
  }, [])

  return (
    <div className={cx("login")}>
      <p className={cx("title-login")}>{Languages.auth.login}</p>
      <p className={cx("title")}>{Languages.auth.titleLogin}</p>
      <form className={cx("form")}>
        {/* {renderInput(
          Languages.auth.name,
          refPhone,
          TYPE_INPUT.TEXT,
          Languages.auth.name,
          30
        )}
          {renderInput(
          Languages.auth.email,
          refPhone,
          TYPE_INPUT.EMAIL,
          Languages.auth.email
        )} */}
        {renderInput(
          Languages.auth.phone,
          refPhone,
          TYPE_INPUT.PHONE,
          Languages.auth.phone,
          10
        )}
        {renderInput(
          Languages.auth.password,
          refPassword,
          TYPE_INPUT.PASSWORD,
          Languages.auth.password
        )}
        {/* {renderInput(
          Languages.auth.rePwd,
          refPhone,
          TYPE_INPUT.PASSWORD,
          Languages.auth.rePwd
        )} */}
        <div className={cx("savePwd")}>
          <a href="" style={{ fontSize: "14px", color: "blue", textDecoration: "none", display: "flex", alignItems: "center" }}> <input type="checkbox" />Lưu mật khẩu </a>
          <a href="" style={{ fontSize: "14px", color: "blue", textDecoration: "none" }}>Quên mật khẩu</a>
        </div>
        {/* {renderButton(Languages.auth.login)} */}
        {renderButtonLogin}
        <div className={cx("div-all")}>
          <div className={cx("div")}></div>
          <span className={cx("or")}>{Languages.auth.or}</span>
          <div className={cx("div")}></div>
        </div>
        {renderButtonGoogle}
        <p>
          <span>{Languages.auth.noAccount}</span>
          <Link to={"/signin"} className={cx("register-now")}>{Languages.auth.registerNow}</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
