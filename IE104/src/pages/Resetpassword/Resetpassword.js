import React from "react";
import "./Resetpassword.css"


const Resetpassword = () => {
    return (
        <div className="auth">
            <div className="div">
            <div className="overlap">
                    <div className="text-wrapper">Quên mật khẩu</div>
                    <div className="frame-10">
                        <p className="code-learn">
                            <span className="span-10">Code</span>
                            <span className="text-wrapper-2">Learn</span>
                        </p>
                    </div>
                </div>
            <div className="resetellipse" />
                <div className="overlap-group">
                    <div className="resetellipse-2" />
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="upper-section">
                                        <div className="auth-text">
                                            <div className="text-wrapper-3">Quên mật khẩu?</div>
                                            <div className="text-wrapper-welcome">Hãy nhập email của bạn</div>
                                        </div>
                                    <div className="credentials">
                                        <form>
                                            <div className="form-group email">
                                                <input type="email" className="form-control" placeholder="Email" name="email"  required/>
                                            </div>
                                            <button class="btn auth-bt-fp resetdiv-wrapper" type="submit">
                                                <p className="text-wrapper-dangnhap">Lấy lại mật khẩu</p>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="frame-115">
                        <p className="resetdon-t-have-an">
                            <span className="text-wrapper-dont-have">Bạn không có tài khoản </span>
                            <span> 
                                <a className="text-wrapper-signup" href="/signup"> Đăng ký ngay</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Resetpassword;
