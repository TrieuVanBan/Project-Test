import React from 'react'
import { Outlet } from 'react-router-dom'
import classNames from 'classnames/bind';
import styles from './Weblayout.module.scss';

const cx = classNames.bind(styles);

const WebLayout = () => {
  return (
    <div className={cx("row")}>
        <div className={cx("widthDiv")}>sdsfdsfds</div>
        <div className={cx("widthDiv1")}><Outlet /></div>
    </div>
  )
}

export default WebLayout