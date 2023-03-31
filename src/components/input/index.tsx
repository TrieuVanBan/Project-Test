import React, { forwardRef, useImperativeHandle } from "react";
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
      important,
      maxLength,
    }: TextFieldProps,
    ref?: any
  ) => {
    useImperativeHandle(ref, () => ({
      // setValue,
      // fillValue,
      getValue,
      // focus,
      // blur,
      setErrorMsg,
    }));

    const handleOnChange = (e: any) => {
      const { value } = e.target;
      console.log(value);
    };

    const getValue = () => {};

    const setErrorMsg = () => {};

    return (
      <>
        <div className={cx('text-green')}>
          {label && (
            <label htmlFor="input-field">
              {label} {important && <span>*</span>}
            </label>
          )}
        </div>
        <input
          type={type}
          // value={value}
          placeholder={placeHolder}
          onChange={handleOnChange}
          maxLength={maxLength}
        />
      </>
    );
  }
);

export default MyInputText;
