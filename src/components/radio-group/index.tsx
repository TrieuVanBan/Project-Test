import React from 'react'
import classNames from 'classnames/bind';
import styles from './radio-group.module.scss';

const cx = classNames.bind(styles);

const RadioGroup = ({ title, type, name, label }: any) => {
    return (
        <div className={cx("radio-group")}>
            <p>{title}</p>
            <input type={type} name={name} />
            <label>{label}</label>
        </div>
    )
}

export default RadioGroup