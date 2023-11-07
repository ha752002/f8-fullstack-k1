import React, { useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { sendEmail as doSendEmail } from '../../utils/emailUtil';

export const ContactUs = () => {
    const form = useRef();
    const { user } = useAuth0();

    const sendEmail = (e) => {
        e.preventDefault();
        doSendEmail(form.current);
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '21px' }}>
                <input
                    type="text"
                    className="form-control"
                    id="user_name"
                    name="user_name"
                    required
                    defaultValue={user.name}
                    hidden
                />
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    <label htmlFor="email" style={{ fontWeight: ' 600' }}>
                        Email của bạn<span className="text-danger">*</span>
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="user_email"
                        required
                        defaultValue={user.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" style={{ fontWeight: ' 600' }}>
                        Tin nhắn<span className="text-danger">*</span>
                    </label>
                    <textarea
                        defaultValue="Tôi cần trợ giúp bài tập về nhà!"
                        name="message"
                        className="form-control"
                        id="message"
                        rows="4"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                    Yêu cầu hỗ trợ!
                </button>
            </form>
        </>
    );
};
