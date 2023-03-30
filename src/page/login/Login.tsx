import React, { useCallback, useRef } from "react";
import MyInputText from "../../components/input";
import { TextFieldActions } from "../../components/input/types";
import { TYPE_INPUT } from "../../commons/constants";
import Languages from "../../commons/langueges";

const Login = () => {
  const refPhone = useRef<TextFieldActions>(null);

  const renderInput = useCallback(
    (
      _label: string,
      _ref: any,
      _type: string,
      _placeholder: string,
      _maxLength: number
      // _important: string
    ) => {
      return (
        <>
          <MyInputText
            label={_label}
            ref={_ref}
            type={_type}
            placeHolder={_placeholder}
            maxLength={_maxLength}
            important
          />
        </>
      );
    },
    []
  );

  return (
    <>
      {renderInput(
        Languages.auth.phone,
        refPhone,
        TYPE_INPUT.PHONE,
        Languages.auth.phone,
        10
      )}
      {/* {renderInput(
        Languages.auth.password,
        refPhone,
        TYPE_INPUT.PASSWORD,
        Languages.auth.password,
        10
      )} */}
    </>
  );
};

export default Login;
