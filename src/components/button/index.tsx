import React from 'react'
import { ButtonProps, BUTTON_STYLES } from './types';
import { MyImage } from '../../components/image';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  label,
  // isLoading,
  // onPress,
  // disabled,
  // isLowerCase,
  // leftIcon,
  // tag,
  // buttonStyle,
  containButtonStyles,
  // customStyles,
  // width,
  rightIcon,
  rightIconStyles,
  // labelStyles,
  // spinnerClass
}: ButtonProps) => {
  return (
    <div>
      <button
        className={cx(`${containButtonStyles ? containButtonStyles : ''}`)}
        // {...rightIcon &&
        // <MyImage
        //   src={rightIcon}
        //   className={rightIconStyles ? cx(`${rightIconStyles}`) : cx('icon-right-styles')}
        // />}
      >
        {label}
      </button>
    </div>
  )
}

export default Button