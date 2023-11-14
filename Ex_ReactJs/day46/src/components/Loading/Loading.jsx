import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Styles from './loading.module.scss';
import clsx from 'clsx';
import {useSelector} from "react-redux";

export default function Loading() {

    const  visible = useSelector((state) => state.loading.visible)

    return (
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 9999,
                alignItems: 'center',
                justifyContent: 'center',
            }}

            visible={visible}
            wrapperClassName={clsx(Styles.overlay)}
        />
    );
}
