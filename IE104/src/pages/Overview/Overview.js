import React from "react";
import "./Overview.css";
import Button from 'react-bootstrap/Button';
import LeftBar from "../../Components/LeftBar/Leftbar"; 

const Overview = () => {

  return (
    <div className="overview-of-course">
      <LeftBar /> 
      <img className="toggle-icon" alt="" src="/toggle.svg" />
      <div className="content-overview">
        <div className="resources">Tổng quan</div> 
        <div className="resources2">{`Bảo mật mạng -> Phát triển phần mềm an toàn`}</div> 
        <div className="course-details-software-container">
        <p className="course-details">{`Chi tiết khóa học: `}</p>
        <p className="course-details-1">

        Các nhà phát triển phần mềm thường được khuyến khích sử dụng 
        các phương pháp lập trình an toàn. May mắn thay, với các công 
        cụ hiện đại ngày nay, việc tạo mã an toàn không mất nhiều thời 
        gian hay công sức. Có các framework bảo mật (xác thực, ủy quyền, v.v.) 
        mà các nhà phát triển có thể sử dụng cho dự án của mình. Ngoài ra, 
        còn có các công cụ phân tích mã nguồn và mã động để kiểm thử mã. 
        Hơn nữa, với các mẫu an toàn có thể triển khai ở mức thiết kế - 
        trước khi bắt đầu viết mã, bạn có thể đảm bảo rằng mình không phải 
        làm lại công việc đã có sẵn.
        </p>

        <p className="course-details">Mục tiêu học tập: </p>
        <ul className="what-is-software-security-ana">
        <li className="what-is-software">Bảo mật phần mềm là gì?</li>
        <li className="what-is-software">
            Phân tích các loại mối đe dọa bảo mật khác nhau
        </li>
        <li className="what-is-software">
            Thiết kế phần mềm an toàn thông qua việc áp dụng các mẫu thiết kế và giải quyết các lỗ hổng
        </li>
        <li className="what-is-software">Tránh tràn bộ đệm (buffer overflows)</li>
        <li className="what-is-software">
            Đối phó với tham chiếu đối tượng trực tiếp không an toàn (insecure direct object references)
        </li>
        <li className="what-is-software">Bảo vệ dữ liệu nhạy cảm</li>
        <li className="what-is-software">Kiểm thử an ninh phần mềm</li>
        </ul>
        <p className="course-details">&nbsp;</p>
        <Button className="button-base-overview">
            <div className="text-2">Tham gia</div>
        </Button>     
      </div>

      </div>
      
      
      
     
         
    </div>
  );
};

export default Overview;
