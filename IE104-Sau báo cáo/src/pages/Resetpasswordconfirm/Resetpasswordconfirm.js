import React from "react";

import "./Resetpasswordconfirm.css";


const Resetpasswordconfirm = () => {
    return (
        <div className="auth">
            <div className="div">
                <div className="resetoverlap">
                    <div className="text-wrapper">New Password</div>
                    <div className="frame">
                        <p className="code-lord">
                            <span className="span">Code</span>
                            <span className="text-wrapper-2">Lord</span>
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
                                            <div className="text-wrapper-3">Nice</div>
                                            <div className="text-wrapper-4">Please enter mew password</div>
                                        </div>
                                    <div className="credentials">
                                        <form >
                                            <div className="form-group passwd">
                                                <input type="password" className="form-control" placeholder="New Password" name="new_password"  minlength="6" required/>
                                            </div>
                                            <div className="form-group confirmpasswd">
                                                <input type="password" className="form-control" placeholder="Enter New Password Again" name="re_new_password"  minlength="6" required/>
                                            </div>
                                            <button class="btn auth-bt-fp resetdiv-wrapper" type="submit">
                                                <p className="text-wrapper-5">Confirm</p>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="frame-5">
                        <p className="resetdon-t-have-an">
                            <span className="text-wrapper-9">Didn't correct?</span>
                            <span> 
                                <a className="text-wrapper-10" href="/reset_password"> Try again</a>
                            </span>
                        </p>
                    </div>
                    <div className="resetcustomer-care">
                        <div className="text-wrapper-11">Terms & Conditions</div>
                        <div className="text-wrapper-11">Support</div>
                        <div className="text-wrapper-11">Customer Care</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Resetpasswordconfirm;
