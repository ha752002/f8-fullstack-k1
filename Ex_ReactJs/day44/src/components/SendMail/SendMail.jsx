import React, { useEffect, useReducer, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { sendEmail as doSendEmail } from '../../utils/emailUtil';
import { useSelector } from '../../store/useContext';
export const ContactUs = () => {
    // const form = useRef();
    const { state, dispatch } = useSelector();

    const { user, isLoading } = useAuth0();
    const defaultContact = {
        email: user.email,
        message: 'Tôi cần trợ giúp bài tập về nhà!',
    };
    const reducer = (prev, action = {}) => {
        switch (action.type) {
            case 'email/change': {
                return {
                    ...prev,
                    email: action.payload,
                };
            }

            case 'message/change': {
                return {
                    ...prev,
                    message: action.payload,
                };
            }

            case 'form/reset': {
                return defaultContact;
            }
        }
    };
    const [contactState, contactDispatch] = useReducer(reducer, {
        ...defaultContact,
    });

    // console.log(contactState.email);

    const sendEmail = (e) => {
        dispatch({
            type: 'loading/toggle',
            payload: true,
        });
        e.preventDefault();
        doSendEmail(contactState).then(() => {
            dispatch({
                type: 'loading/toggle',
                payload: false,
            });
        });
        contactDispatch({
            type: 'form/reset',
        });
    };
    return (
        <>
            <form onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '21px' }}>
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
                        value={contactState.email}
                        required
                        onChange={(e) => {
                            contactDispatch({
                                type: 'email/change',
                                payload: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" style={{ fontWeight: ' 600' }}>
                        Tin nhắn<span className="text-danger">*</span>
                    </label>
                    <textarea
                        name="message"
                        onChange={(e) => {
                            contactDispatch({
                                type: 'message/change',
                                payload: e.target.value,
                            });
                        }}
                        value={contactState.message}
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
