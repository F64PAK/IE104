import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./Dashboard.css";
import LeftBar from "../../Components/LeftBar/Leftbar"; 
import Header from "../../Components/Header/Header"; 
import rectangle from "./images/rectangle-5.svg";
import Group29 from "./images/Group 29.svg"
import Group1 from "./images/Group1.svg"
import Group28 from "./images/Group 28.svg"
import Image2 from "./images/Image 2.svg"
import Group from "./images/Group.svg"
import Document from "./images/Document.svg"
import Polygon from "./images/Polygon 1.svg"

function Dashboard ()  {    

  return (
    <div className="dashboard-profile-2">
      {/* <div className="overlap-wrapper"> */}
        {/* <div className="overlap"> */}
          <LeftBar />
          <Header />
          
        <div className="right-bar">
          <img className="img" alt="Rectangle" src={rectangle}/>
          <div className="calendar">
            <div className="month-selector">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img
                    className="vector-stroke"
                    alt="Vector stroke"
                    src="https://c.animaapp.com/nDae5x4u/img/vector-2--stroke--1.svg"
                  />
                  <div className="text-wrapper-4">12 2023</div>
                </div>
              </div>
              <div className="text-wrapper-5">Lịch</div>
            </div>
            <div className="calendar-events">
              <div className="weekdays-weeks">
                <div className="weekdays">
                  <div className="text-wrapper-6">T2</div>
                  <div className="text-wrapper-7">T3</div>
                  <div className="text-wrapper-8">T4</div>
                  <div className="text-wrapper-9">T5</div>
                  <div className="text-wrapper-10">T6</div>
                  <div className="text-wrapper-11">T7</div>
                  <div className="text-wrapper-12">CN</div>
                </div>
                <div className="week">
                  <div className="text-wrapper-13">1</div>
                  <div className="text-wrapper-14">2</div>
                  <div className="text-wrapper-15">3</div>
                  <div className="text-wrapper-16">4</div>
                </div>
                <div className="overlap-3">
                  <div className="week-2">
                    <div className="text-wrapper-17">5</div>
                    <div className="text-wrapper-18">6</div>
                    <div className="text-wrapper-19">7</div>
                    <div className="div-wrapper-2">
                      <div className="text-wrapper-20">8</div>
                    </div>
                    <div className="current-day" />
                    <div className="current-day-2" />
                    <div className="current-day-3" />
                    <div className="overlap-4">
                      <div className="text-wrapper-21">9</div>
                    </div>
                    <div className="overlap-group-3">
                      <div className="text-wrapper-22">10</div>
                    </div>
                    <div className="text-wrapper-23">11</div>
                  </div>
                  <div className="week-3">
                    <div className="text-wrapper-24">12</div>
                    <div className="text-wrapper-25">13</div>
                    <div className="text-wrapper-26">14</div>
                    <div className="text-wrapper-27">15</div>
                    <div className="text-wrapper-28">16</div>
                    <div className="text-wrapper-29">17</div>
                    <div className="text-wrapper-30">18</div>
                  </div>
                  <div className="week-4">
                    <div className="text-wrapper-24">19</div>
                    <div className="text-wrapper-31">20</div>
                    <div className="text-wrapper-32">21</div>
                    <div className="text-wrapper-33">22</div>
                    <div className="text-wrapper-34">23</div>
                    <div className="text-wrapper-35">24</div>
                    <div className="text-wrapper-36">25</div>
                  </div>
                </div>
                <div className="week-5">
                  <div className="text-wrapper-37">26</div>
                  <div className="text-wrapper-38">27</div>
                  <div className="text-wrapper-39">28</div>
                  <div className="text-wrapper-40">29</div>
                  <div className="text-wrapper-41">30</div>
                  <div className="text-wrapper-42">31</div>
                </div>
              </div>
              </div>
              </div>

          <div className="activities">
            <div className="text-wrapper-43">Hoạt động sắp tới</div>
            <div className="text-wrapper-44">Xem tất cả</div>
            <div className="social-ins">
              <div className="group-wrapper">
                <div className="group-3">
                  <div className="group-4">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-45">13</div>
                    </div>
                  </div>
                  <div className="group-5">
                    <div className="text-wrapper-46">Kiểm tra Cuối kì Front-End</div>
                    <p className="p">B108 - Đại học Công nghệ Thông tin - UIT</p>
                    <div className="group-6">
                      <div className="text-wrapper-47">13/12/2023</div>
                      <p className="text-wrapper-48">8 A.M - 9 A.M</p>
                      <div className="ellipse-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="adv-maths">
              <div className="group-wrapper">
                <div className="group-7">
                  <div className="group-8">
                    <div className="overlap-group-5">
                      <div className="text-wrapper-49">18</div>
                    </div>
                  </div>
                  <div className="group-9">
                    <div className="text-wrapper-46">Kiểm tra trắc nghiệm Back-End</div>
                    <p className="p">**Nộp bài qua Email</p>
                    <div className="group-10">
                      <div className="text-wrapper-47">18/12/2023</div>
                      <p className="text-wrapper-48">8 A.M - 9 A.M</p>
                      <div className="ellipse-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dr-dipo">
              <div className="overlap-5">
                <div className="group-11">
                  <div className="group-12">
                    <div className="overlap-group-6">
                      <div className="text-wrapper-50">23</div>
                    </div>
                  </div>
                  <div className="group-13">
                    <div className="text-wrapper-46">Kiểm tra Cuối kì Data Science</div>
                    <p className="text-wrapper-51">C307 - Đại học Công nghệ Thông tin - UIT</p>
                    <div className="group-14">
                      <div className="text-wrapper-47">23rd July 2021</div>
                      <p className="text-wrapper-48">10 A.M - 1 P.M</p>
                      <div className="ellipse-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="life-con">
              <div className="group-wrapper">
                <div className="group-15">
                  <div className="group-16">
                    <div className="overlap-group-7">
                      <div className="text-wrapper-52">8</div>
                    </div>
                  </div>
                  <div className="group-17">
                    <div className="text-wrapper-46">Kiểm tra cuối kì Networking</div>
                    <p className="p">C307 - Đại học Công nghệ Thông tin - UIT</p>
                    <div className="group-18">
                      <p className="text-wrapper-47">8/12/2023</p>
                      <p className="text-wrapper-53">8 A.M - 9 A.M</p>
                      <div className="ellipse-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll">
              <div className="rectangle-2" />
            </div>
          </div>
        </div>
          {/* <div className="rectangle" /> */}
        <div className="content-2">
          <div className="top-performing">
            <div className="overlap-6">
              <div className="scroll-2">
                <div className="rectangle-4" />
              </div>
              <div className="text-wrapper-65">Bảng xếp hạng</div>
              <div className="MA">
                <div className="overlap-7">
                  <div className="element-points">7 Điểm</div>
                  <div className="text-wrapper-66">Hoàng Anh Tuấn</div>
                  <div className="group-20">
                    <div className="overlap-group-12">
                      <div className="text-wrapper-67">AT</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="OT">
                <div className="overlap-8">
                  <div className="element-points-2">8 Điểm</div>
                  <div className="text-wrapper-68">Nguyễn Ngọc Hân</div>
                  <div className="group-21">
                    <div className="overlap-group-13">
                      <div className="text-wrapper-69">NH</div>
                    </div>
                  </div>
                </div>
                <img className="group-22" alt="Group" src={Group29} />
              </div>
              <div className="JA">
                <div className="overlap-8">
                  <div className="group-23">
                    <div className="overlap-group-14">
                      <div className="text-wrapper-70">AN</div>
                    </div>
                  </div>
                  <div className="text-wrapper-71">Dương Anh Nguyên</div>
                  <div className="element-points-3">9.6 Điểm</div>
                </div>
                <img className="group-24" alt="Group" src={Group1} />
              </div>
              <div className="AA">
                <div className="overlap-8">
                  <div className="text-wrapper-72">Trần Trọng Hưng</div>
                  <div className="group-25">
                    <div className="overlap-group-15">
                      <div className="text-wrapper-73">TH</div>
                    </div>
                  </div>
                  <div className="element-points-4">9 Điểm</div>
                </div>
                <img className="group-26" alt="Group" src={Group28} />
              </div>
            </div>
          </div>
          <div className="performance">
            <div className="overlap-9">
              <div className="rectangle-5" />
              <div className="text-wrapper-74">Hiệu suất</div>
              <div className="group-27">
                <div className="text-wrapper-75">Tổng quan</div>
                <img className="polygon" alt="Polygon" src={Polygon} />
              </div>
              <div className="line-chart">
                <div className="vector-wrapper">                 
                </div>
              </div>
            </div>
          </div>
          <div className="messages">
            <div className="overlap-6">
              <div className="text-wrapper-76">Tin nhắn</div>
              <div className="text-wrapper-77">Xem tất cả</div>
              <div className="josh">
                <div className="overlap-10">
                  <div className="text-wrapper-78">15:30 pm</div>
                  <div className="group-28">
                    <p className="dear-ayo-you-are-yet">
                      Bạn vẫn chưa nộp bài tập của mình<br />
                      cho chương 3
                    </p>
                    <div className="text-wrapper-79">Nguyễn Ngọc Hân</div>
                  </div>
                </div>
                <div className="group-29">
                  <div className="overlap-group-16">
                    <div className="text-wrapper-80">NH</div>
                  </div>
                </div>
              </div>
              <div className="olawuyi">
                <div className="overlap-11">
                  <div className="text-wrapper-81">12:30 pm</div>
                  <div className="group-30">
                    <p className="text-wrapper-82">Bạn có thể kiểm tra các công thức trong hình ảnh đính kèm này đuọc không...</p>
                    <div className="group-31">
                      <div className="group-32">
                        <div className="group-33">
                          <div className="text-wrapper-83">Image .jpg</div>
                        </div>
                      </div>
                      <div className="group-34">
                        <div className="group-35">
                          <div className="text-wrapper-84">Form .jpg</div>
                        </div>
                      </div>
                      <div className="group-36">
                        <div className="group-37">
                          <img
                            className="image-2"
                            alt="Image2"
                            src = {Image2}
                            
                          />
                          <div className="text-wrapper-85">Image 2 .jpg</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-wrapper-86">Trần Trọng Hưng</div>
                  </div>
                </div>
                <div className="group-29">
                  <div className="overlap-group-17">
                    <div className="text-wrapper-87">TH</div>
                  </div>
                </div>
              </div>
              <div className="mayowa">
                <div className="text-wrapper-88">09:34 am</div>
                <div className="group-29">
                  <div className="overlap-group-18">
                    <div className="text-wrapper-89">AN</div>
                  </div>
                </div>
                <div className="group-38">
                  <div className="text-wrapper-90">Dương Anh Nguyên</div>
                  <p className="text-wrapper-91">Chào! Mình vừa mới hoàn thành chương đầu tiên.</p>
                  <div className="group-39">
                    <div className="group-40">
                      <img
                        className="iconly-light-outline-5"
                        alt="Iconly light outline"
                        src={Document}
                      />
                      <p className="text-wrapper-92">chuong1.doc</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="welcome">
            <div className="overlap-2">
              <p className="you-ve-learned-of">
                <span className="span">Bạn đã hoàn thành </span>
                <span className="text-wrapper-2">70% </span>
                <span className="span">
                  {" "}
                  mục tiêu của tuần này!
                  <br />
                  Tiếp tục nỗ lực và cải thiện tiến độ của bạn.
                </span>
              </p>
              <div className="group-2">
                <div className="text-wrapper-3">Chào mừng trở lại, user0!</div>
              </div>
              <img className="artboard-1-1" alt="" src={Group} />
            </div>
          </div>

          <div className="completion-progress">
            <div className="overlap-6">
              <div className="text-wrapper-54">Tiến độ</div>
              <div className="life-cont">
                <div className="text-wrapper-55">Front-End</div>
                <div className="text-wrapper-56">Chương 5</div>
                <div className="group-19">
                  <div className="overlap-group-8">
                    <div className="text-wrapper-57">80%</div>
                  </div>
                </div>
              </div>
              <div className="social-ins-2">
                <div className="text-wrapper-58">Back-End</div>
                <div className="text-wrapper-56">Chương 10</div>
                <div className="group-19">
                  <div className="overlap-group-9">
                    <div className="text-wrapper-59">90%</div>
                  </div>
                </div>
              </div>
              <div className="advanced-maths">
                <div className="text-wrapper-60">Data Science</div>
                <div className="text-wrapper-61">Chương 11</div>
                <div className="group-19">
                  <div className="overlap-group-10">
                    <div className="text-wrapper-62">85%</div>
                  </div>
                </div>
              </div>
              <div className="pension">
                <div className="text-wrapper-63">Networking</div>
                <div className="text-wrapper-64">Chương 5</div>
                <div className="group-19">
                  <div className="overlap-group-11">
                    <div className="text-wrapper-59">80%</div>
                  </div>
                </div>
              </div>
              <div className="rectangle-wrapper">
                <div className="rectangle-3" />
              </div>
            </div>
          </div>
        </div>
          
         



          

          
          
          
      </div>
          // </div>
        // </div>
 
    );
};
export default Dashboard;
