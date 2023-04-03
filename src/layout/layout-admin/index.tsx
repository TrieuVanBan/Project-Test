import React from 'react'
import classNames from 'classnames/bind';
import styles from './layout.module.scss';

const cx = classNames.bind(styles);

type Props = {}

const LayoutAdmin = (props: Props) => {
    return (
        <div className={cx("layout")}>LayoutAdmin</div>
    )
}

export default LayoutAdmin