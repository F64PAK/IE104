import React from "react";
import "./MyLearning.css";
import meta from "./images/meta.svg"
import LeftBar from "../../Components/LeftBar/Leftbar";
import Header from "../../Components/Header/Header";

const CourseCard = ({ title, lessons, category, skills, progress, source }) => {
  const progressBarWidth = `${parseFloat(progress) * 12}px`; 

  return (
    <div className="course-card">
      
      <div className="course-title">{title}</div>
      <div className="course-info">
        <div className="course-lessons">{`${lessons} Lessons`}</div>
        <div className="course-category">{category}</div>
      </div>
      <div className="course-progress">
        <div className="course-progress-bar" style={{ width: progressBarWidth }}>
          &nbsp;
        </div>
      </div>
      <img
          className="course-source"
          alt=""
          src={source}
        />
      <div className="course-skills">
        <span className="skills-label">Kỹ năng sẽ đạt được: </span>
        <span>{skills}</span>
      </div>
      <button className="course-button">Tiếp tục</button>
    </div>
  );
};

const MyLearning = () => {
  return (
    <div className="dashboard-my-learning">
      <LeftBar />
      <Header />
      <div className="card">
      <CourseCard
        title="Nhập môn Front-End Development"
        lessons="25"
        category="Front-end"
        skills="HTML and CSS, Web Development"
        progress="50%"
        source={meta}

      />

      <CourseCard
        title="Nhập môn Back-End Development"
        lessons="30"
        category="Back-end"
        skills="Python, Django Web Development"
        progress="90%"
        source={meta}
      />
      </div>
      
    </div>
  );
};

export default MyLearning;

