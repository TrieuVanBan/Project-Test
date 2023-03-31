import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react";
import { TextFieldProps } from "./types";
import classNames from 'classnames/bind';
import styles from './input.module.scss';

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

    const [valueText, setValueText] = useState<any>(`${value}`);
    const [errMsg, setErrMsg] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const orgTextInput = useRef<HTMLInputElement>(null);

    const handleOnChange = (e: any) => {
      const { value } = e.target;
      console.log(value);
    };

    const getValue = () => { };
    const setErrorMsg = () => {};
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
            onChange={handleOnChange}
            maxLength={maxLength}
            className={cx(
              `${inputStyle ? inputStyle : 'input-style'}`, `${!disabled ? '' : 'disable-input-container'}`
            )}
          />
        </div>
      </div>
    );
  }
);

export default MyInputText;
