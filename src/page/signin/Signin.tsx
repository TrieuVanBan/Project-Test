import React, { useCallback, useMemo, useRef } from "react";
import IcGoogle from "../../assets/icon/ic_google.svg";
import MyInputText from "../../components/input";
import { TextFieldActions } from "../../components/input/types";
import { TYPE_INPUT } from "../../commons/constants";
import Languages from "../../commons/langueges";
import classNames from "classnames/bind";
import styles from "./Signin.module.scss";
import Button from "../../components/button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import RadioGroup from "../../components/radio-group";
import formValidate from "../../utils/form-validate";

const cx = classNames.bind(styles);
const url = "http://localhost:5000/users";

const Signin = () => {
  const refName = useRef<TextFieldActions>(null);
  const refPhone = useRef<TextFieldActions>(null);
  const refPassword = useRef<TextFieldActions>(null);
  const refEmail = useRef<TextFieldActions>(null);
  const refRePwd = useRef<TextFieldActions>(null);

  const navigate = useNavigate();

  // Validate Form
  const isValidateForm = () => {
    const _name = refName.current?.getValue();
    const _phone = refPhone.current?.getValue();
    const _email = refEmail.current?.getValue();
    const _password = refPassword.current?.getValue();
    const _rePwd = refRePwd.current?.getValue();

    const errMsgName = formValidate.userNameValidateSignUp(_name);
    const errMsgPhone = formValidate.passConFirmPhone(_phone);
    const errMsgEmail = formValidate.emailValidate(_email);
    const errMsgPassword = formValidate.passValidate(_password);
    const errMsgRePwd = formValidate.passConFirmValidate(_password, _rePwd);

    refName.current?.setErrorMsg(errMsgName);
    refPhone.current?.setErrorMsg(errMsgPhone);
    refEmail.current?.setErrorMsg(errMsgEmail);
    refPassword.current?.setErrorMsg(errMsgPassword);
    refRePwd.current?.setErrorMsg(errMsgRePwd);

    return (
      !errMsgName &&
      !errMsgPhone &&
      !errMsgEmail &&
      !errMsgPassword &&
      !errMsgRePwd
    );
  };

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

  const rederInputRadio = useCallback(
    (_type: string, _label: string, _name: string, _title?: string) => {
      return (
        <RadioGroup type={_type} label={_label} name={_name} title={_title} />
      );
    },
    []
  );

  const renderButtonLogin = useMemo(() => {
    return (
      <Button
        label={Languages.auth.register}
        containButtonStyles={cx("button-login")}
      />
    );
  }, []);

  const renderButtonGoogle = useMemo(() => {
    return (
      <Button
        label={Languages.auth.loginGoogle}
        containButtonStyles={cx("button-google")}
        rightIcon={IcGoogle}
      />
    );
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (isValidateForm()) {
      // add user
      await axios
        .post(url, {
          name: refName.current?.getValue(),
          phone: refPhone.current?.getValue(),
          email: refEmail.current?.getValue(),
          password: refPassword.current?.getValue(),
        })
        .then((response) => {
          console.log(response.data);
          alert("Bạn đã đăng ký tài khoản thành công!");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={cx("login")}>
      <p className={cx("title-login")}>{Languages.auth.register}</p>
      <p className={cx("title")}>{Languages.auth.titleRegiter}</p>
      <form className={cx("form")} onSubmit={handleSubmit}>
        {renderInput(
          Languages.auth.name,
          refName,
          TYPE_INPUT.TEXT,
          Languages.auth.name,
          30
        )}
        {renderInput(
          Languages.auth.email,
          refEmail,
          TYPE_INPUT.TEXT,
          Languages.auth.email
        )}
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
        {renderInput(
          Languages.auth.rePwd,
          refRePwd,
          TYPE_INPUT.PASSWORD,
          Languages.auth.rePwd
        )}
        <div className={cx("savePwd")}>
          {rederInputRadio(
            TYPE_INPUT.RADIO,
            Languages.common.yes,
            "yes",
            Languages.auth.questionIsEmployee
          )}
          {rederInputRadio(TYPE_INPUT.RADIO, Languages.common.no, "no")}
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
          <Link to={"/"} className={cx("register-now")}>
            {Languages.auth.loginNow}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
