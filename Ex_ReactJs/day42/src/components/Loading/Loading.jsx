import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Styles from './loading.module.scss'; // Đảm bảo rằng bạn đã import đúng tệp CSS

export default function Loading({ visible }) {
    return (
        // Sử dụng một div với lớp CSS overlay để tạo overlay
        <div className={Styles.overlay}>
            <ThreeDots
                height={80}
                width={80}
                radius={9}
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                visible={visible}
            />
        </div>
    );
}
