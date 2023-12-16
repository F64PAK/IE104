import React from "react";
import { Image } from "react-bootstrap";
import "./Login.css"
import facebook from "./images/facebook.svg";
import google from "./images/google.svg";
import github from "./images/github.svg";
import line1 from "./images/line-1.svg";

const Login = () => {
    return (
        <div className="auth">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">Chào mừng bạn!</div>
                    <div className="frame-10">
                        <p className="code-learn">
                            <span className="span-10">Code</span>
                            <span className="text-wrapper-2">Learn</span>
                        </p>
                    </div>
                </div>

            <div className="ellipse" />
                <div className="overlap-group">
                    <div className="ellipse-2" />
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="upper-section">
                                        <div className="auth-text">
                                            <div className="text-wrapper-3">Đăng nhập</div>
                                            <div className="text-wrapper-welcome">Chào mừng bạn đã quay trở lại</div>
                                        </div>
                                    <div className="credentials">
                                        <form >
                                            <div className="form-group email">
                                                <input type="email" className="form-control" placeholder="Email" name="email"   required/>
                                            </div>
                                            <div className="form-group passwd">
                                                <input type="password" className="form-control" placeholder="Mật khẩu" name="password"   minlength="6" required/>
                                            </div>
                                            <div className="form-group rememberMe mb-3">
                                                <input type="checkbox" id="rememberMe"/>
                                                <label className="text">Nhớ mật khẩu</label>
                                            </div>
                                            <button class="btn auth-bt-fp div-wrapper-100" type="submit">
                                                <p className="text-wrapper-dangnhap">Đăng nhập</p>
                                            </button>
                                        </form>
                                    </div>

                                    <a className="text-wrapper-quenmatkhau" href='/reset_password'> Quên mật khẩu?</a>
                                </div>
                            </div>
                            <div className="other-auths">
                                <div className="or">
                                    <Image className="line-10" alt="Line" src={line1} />
                                    <div className="text-wrapper-hoac">Hoặc</div>
                                    <Image className="line-10" alt="Line" src={line1} />
                                </div>
                                <div className="social">
                                    <a href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                                    <Image className="frame-4" alt="google" src={google} href ="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"/>
                                    </a>
                                    <a href = "https://www.facebook.com/">
                                    <Image className="frame-4" alt="facebook" src={facebook} />
                                    </a>
                                    <a href = "https://github.com/">
                                    <Image className="frame-4" alt="github" src={github} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    <div className="frame-115">
                        <p className="don-t-have-an">
                            <span className="text-wrapper-dont-have">Không có tài khoản ?</span>
                            <span> 
                                <a className="text-wrapper-signup" href="/signup"> Đăng ký</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;

