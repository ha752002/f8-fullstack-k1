import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutButton from '../../components/LogOutButton/LogOutButton';
import Profile from '../../components/Profile/Profile';
import { ContactUs } from '../../components/SendMail/SendMail';

export default function HomePage() {
    return (
        <>
            <div className="container-sm " style={{ margin: ' 122px auto' }}>
                <div className="card" style={{ width: '67%', margin: '0 auto' }}>
                    <div className="card-body max-width-60">
                        {/* <div className="d-flex justify-content-center">
                            <img
                                src="https://lh3.googleusercontent.com/a/ACg8ocJGFUcJYP7X-NGNCebEqR7-YeKUBO_dZw4ogFx4b-yAMhRq=s96-c"
                                className="rounded-circle"
                                alt="Ha Nguyen Thi Hong"
                                style={{ width: '96px' }}
                            />
                        </div>
                        <h6 className="card-title text-center">Xin Chào Ha Nguyen Thi Hong !</h6>
                        <p className="card-text">Vị trí: English</p>
                        <p className="card-text">
                            Email:{' '}
                            <a href="mailto:ha.nth.838@aptechlearning.edu.vn">ha.nth.838@aptechlearning.edu.vn</a>
                        </p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email của bạn<span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    required
                                    defaultValue="ha.nth.838@aptechlearning.edu.vn"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">
                                    Tin nhắn<span className="text-danger">*</span>
                                </label>
                                <textarea className="form-control" id="message" rows="4" required>
                                    Tôi cần trợ giúp bài tập về nhà!
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                Yêu cầu hỗ trợ!
                            </button>
                        </form> */}
                        <Profile />
                        <ContactUs />
                    </div>
                </div>
                <LogoutButton />
            </div>
        </>
    );
}
