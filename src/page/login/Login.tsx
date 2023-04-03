import React, { useCallback, useMemo, useRef } from "react";
import IcGoogle from '../../assets/icon/ic_google.svg';
import MyInputText from "../../components/input";
import { TextFieldActions } from "../../components/input/types";
import { TYPE_INPUT } from "../../commons/constants";
import Languages from "../../commons/langueges";
import classNames from 'classnames/bind';
import styles from './login.module.scss';
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import formValidate from "../../utils/form-validate";
import axios from "axios";

const cx = classNames.bind(styles);
const url = "http://localhost:5000/users";

const Login = () => {
  const refPhone = useRef<TextFieldActions>(null);
  const refPassword = useRef<TextFieldActions>(null);

  const navigate = useNavigate()

  const isValidateForm = () => {
    const _phone = refPhone.current?.getValue()
    const _password = refPassword.current?.getValue()

    const errMsgPhone = formValidate.passConFirmPhone(_phone)
    const errMsgPassword = formValidate.passValidate(_password)

    refPhone.current?.setErrorMsg(errMsgPhone);
    refPassword.current?.setErrorMsg(errMsgPassword);


    return !errMsgPhone && !errMsgPassword
  }

  const SubmitForm = (e: any) => {
    e.preventDefault();

    if (isValidateForm()) {
      axios.get(url)
        .then((res) => {
          const isValidUser = res.data.find(
            (item: any) => {
              // if (item.phone == refPhone.current?.getValue() && item.password == refPassword.current?.getValue()) {
              //   alert("Đăng nhập thành công")
              //   navigate("/admin")
              // } else {
              //   alert("Tài khoản hoặc mật khẩu không chính xác")
              // }
              return item.phone == refPhone.current?.getValue() && item.password == refPassword.current?.getValue()
            }
          );
          alert(isValidUser ? "Đăng nhập thành công" : "Tài khoản hoặc mật khẩu không chính xác");
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
      <form className={cx("form")} onSubmit={SubmitForm}>
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
        <div className={cx("savePwd")}>
          <Link to={""} style={{ fontSize: "14px", color: "blue", textDecoration: "none", display: "flex", alignItems: "center" }}> <input type="checkbox" />Lưu mật khẩu </Link>
          <Link to={"forgotPwd"} style={{ fontSize: "14px", color: "blue", textDecoration: "none" }}>Quên mật khẩu</Link>
        </div>
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

export default Login;
