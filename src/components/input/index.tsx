import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from "react";
import { TextFieldProps } from "./types";
import classNames from 'classnames/bind';
import styles from './input.module.scss';
import validate from "../../utils/validate";

const cx = classNames.bind(styles);

const MyInputText = forwardRef(
  (
    {
      type,
      value,
      label,
      placeHolder,
      rightIcon,
      containerInput,
      inputStyle,
      disabled,
      important,
      maxLength,
    }: TextFieldProps,
    ref?: any
  ) => {
    useImperativeHandle(ref, () => ({
      // setValue,
      // fillValue,
      getValue,
      focus,
      blur,
      setErrorMsg,
    }));

    const [valueText, setValueText] = useState<any>('');
    const [errMsg, setErrMsg] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const orgTextInput = useRef<HTMLInputElement>(null);

    // const handleOnChange = (e: any) => {
    //   const { value } = e.target;
    //   console.log(value);
    // };

    const _onChangeText = (e: any) => {
      setErrMsg('');
      const { value } = e.target;
      setValueText(value)
    }

    const getValue = () => {
      return valueText
    };

    const setErrorMsg = useCallback((msg: string) => {
      if (validate.isStringEmpty(msg)) {
        return setErrMsg('');
      }
      setErrMsg(msg);
    }, []);

    const errorMessage = useMemo(() => {
      if (!validate.isStringEmpty(errMsg)) {
        return <span className={cx("errorMessage")}>{errMsg}</span>;
      }
      return null;
    }, [errMsg]);

    const focus = useCallback(() => {
      if (orgTextInput.current) {
        orgTextInput.current?.focus();
      }
      setIsFocus(true)
    }, [])

    const blur = useCallback(() => {
      if (orgTextInput.current) {
        orgTextInput.current?.blur();
      }
      setIsFocus(false);
    }, [])

    return (
      <div className={cx("input")}>
        <div className={cx('label-container')}>
          {label && (
            <label className={cx(styles.label, 'text-gray')}>
              {label} {important && <span className={cx('text-red')}>*</span>}
            </label>
          )}
        </div>
        <div className={cx(`${containerInput}`, isFocus ? 'focus-input-container' : (errMsg ? 'error-input-container' : 'select-container'))}>
          <input
            ref={orgTextInput}
            type={type}
            // value={value}
            onFocus={focus}
            onBlur={blur}
            placeholder={placeHolder}
            onChange={_onChangeText}
            maxLength={maxLength}
            className={cx(
              `${inputStyle ? inputStyle : 'input-style'}`, `${!disabled ? '' : 'disable-input-container'}`
            )}
          />
        </div>
        {errorMessage}
      </div>
    );
  }
);

export default MyInputText;
