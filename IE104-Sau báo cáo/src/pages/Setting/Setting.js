import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Setting.css";
import LeftBar from "../../Components/LeftBar/Leftbar";


const Setting = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    language: "Vietnamese",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="frame">
      <LeftBar />
      <div className="dashboard-profile-settings_2">
        {/* <div className="dashboard-profile-settings-child" /> */}
        
        
        <div className="change-settings-wrapper">
          <h1 className="change-settings-title">Thay đổi cài đặt</h1>
          <h3 className="change-settings-password">
            <Link to="/changepassword">Đổi mật khẩu</Link>
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Tên: </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Ngày sinh:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="language">Ngôn ngữ:</label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="Vietnamese">Vietnamese</option>
                <option value="English">English</option>
                <option value="Spanish">Laos</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="save-button">
                Lưu thay đổi
              </button>
              <button type="submit" className="cancel-button">
                Huỷ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;