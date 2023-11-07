import React from 'react';
import LoginButton from '../../components/LoginButton/LoginButton';
import { useSelector } from '../../store/useContext';

function Welcome() {
    const { state, dispatch } = useSelector();
    // console.log(state, dispatch);

    return (
        <>
            <div
                className="card border-rounded"
                style={{
                    maxWidth: '400px',
                    margin: '80px auto',
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    textAlign: 'center',
                    backgroundColor: '#f0f0f0',
                    fontFamily: 'Arial, sans-serif',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            >
                <div
                    className="card-body"
                    style={{
                        gap: '19px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <h1 className="card-title">Cảm ơn bạn đã sử dụng dịch vụ của F8</h1>
                    <p className="card-text">
                        Nếu có bất kỳ câu hỏi hoặc cần trợ giúp nào, hãy đăng nhập và đặt câu hỏi tại đây!
                    </p>
                    <LoginButton />
                </div>
            </div>
        </>
    );
}

export default Welcome;
