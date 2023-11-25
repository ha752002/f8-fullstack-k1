import React from 'react';

const MoneyHistory = ({ histories, total, handleReset }) => {
    console.log('MoneyHistory ');

    return (
        <div>
            <h2>Lịch sử chuyển tiền</h2>
            {histories.map((item, index) => (
                <h3 key={index}>{item.toLocaleString()}$</h3>
            ))}
            <h2>Tổng tiền: {total.toLocaleString()}</h2>
            <button
                onClick={(e) => {
                    handleReset(e);
                }}
            >
                Xóa lịch sử
            </button>
        </div>
    );
};
export default React.memo(MoneyHistory);
