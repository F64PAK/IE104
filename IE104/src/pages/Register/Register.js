import React from "react";
import { Image } from "react-bootstrap";
import facebook from "../../pages/Login/images/facebook.svg";
import google from "../../pages/Login/images/google.svg";
import github from "../../pages/Login/images/github.svg";
import line1 from "../../pages/Login/images/line-1.svg";
import "./Register.css"


const Register = () => {
    return (
        <div className="auth">
            <div className="div">
                <div className="overlap">
                    <div className="text-wrapper">Đăng ký</div>
                    <div className="frame-10">
                        <p className="code-learn">
                            <span className="span-10">Code</span>
                            <span className="text-wrapper-2">Learn</span>
                        </p>
                    </div>
                </div>
                
            <div className="resellipse" />
                <div className="overlap-group">
                    <div className="resellipse-2" />
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="upper-section">
                                        <div className="auth-text">
                                            <div className="text-wrapper-3">Đăng ký</div>
                                            <div className="text-wrapper-welcome">Hãy cung cấp cho chúng tôi một vài thông tin nhé</div>
                                        </div>
                                    <div className="credentials">
                                        <form >
                                            <div className="form-group name">
                                                <input type="name" className="form-control" placeholder="Tên của bạn là gì?" name="name"  required/>
                                            </div>
                                            <div className="form-group emailres">
                                                <input type="email" className="form-control" placeholder="Email" name="email"  required/>
                                            </div>
                                            <div className="form-group passwdres">
                                                <input type="password" className="form-control" placeholder="Mật khẩu" name="password"  minlength="6" required/>
                                            </div>
                                            <div className="form-group repasswdres">
                                                <input type="password" className="form-control" placeholder="Nhập mật khẩu" name="re_password"  minlength="6" required/>
                                            </div>
                                            
                                            <button class="btn auth-bt-fp resdiv-wrapper" type="submit">
                                                <p className="text-wrapper-dangnhap">Đăng ký</p>
                                            </button>
                                        </form>
                                    </div>
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
                        <p className="resdon-t-have-an">
                            <span className="text-wrapper-dont-have">Không có tài khoản ?</span>
                            <span> 
                                <a className="text-wrapper-signup" href="/login"> Đăng nhập</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// });

export default Register;
