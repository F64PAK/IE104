import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Accordion, Container } from 'react-bootstrap';

import img1 from '../../images/img1.svg';
import img2 from '../../images/img2.svg';
import star1 from '../../images/star.svg';
import star2 from '../../images/star2.svg';
import woman from '../../images/woman.svg';
import woman2 from '../../images/woman-FAQ.svg';
import ibm from '../../images/ibm.png';
import google from '../../images/google.svg';
import cisco from '../../images/cisco.svg';
import meta from '../../images/meta.svg';
import work from '../../images/work.svg';
import target from '../../images/target.svg';
import credit_card from '../../images/credit_card.svg';
import line from '../../images/line.svg';
import polygon from '../../images/polygon.svg';
import leftbackgroundimg from '../../images/leftimagesbackground.svg';
import rightbackgroundimg from '../../images/rightimagesbackground.svg';
import middlebackgroundimg from '../../images/middleimagesbackground.svg';
import Background from '../../images/background2.svg';
import { Link } from 'react-router-dom';
import Footer from "../../Components/Footer/Footer"; 

function Home () {

    return (
        <div className='background'>
            {/* navbar */}
            <nav className= "navbar navbar-expand-lg navbar-transparent header">
                <a className="navbar-brand codelord" href="/">
                    <span className="code code">Code</span> <span className="lord lord">Learn</span>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav select">
                        <li className="nav-item 1">
                            <a className="nav-link" href="/">Trang chủ</a>
                        </li>
                        <li className="nav-item 2">
                            <a className="nav-link" href="/categories">Danh mục</a>
                        </li>
                        <li className="nav-item 3">
                            <a className="nav-link" href="/">Liên hệ</a>
                        </li>
                        <li className="nav-item 4">
                            <a className="nav-link" href="/">Giới thiệu</a>
                        </li>
                    </ul>
                </div>
                <div className="button button-distance">
                    <Link className="btn btn-login button-text poppins-font button-container" to="/login">Đăng nhập</Link>
                    <Link className="btn btn-signup button-text poppins-font button-container" to="/signup">Đăng ký</Link>
                </div>
            </nav>
            <Container className="Home">
                <Row className="HomeStart">
                    <Col className='Limit'>
                        <h2 className="Title title">
                            Code <span style={{ color: "#21B573" }}>Learn</span>
                            <br />
                            Code your dreams
                        </h2>
            
                        <div className="background-img1 background-img1">
                            <Image className="backroundimg1" src={leftbackgroundimg} alt="lung" />
                        </div>
                        <div className="left-img left-img">
                            <Image className="img1" src={img1} alt="a-man-using-laptop" />
                        </div>
                        <div className="background-img2 background-img2">
                            <Image className="backroundimg2" src={rightbackgroundimg} alt="linh" />
                        </div>
                        <div className="right-img right-img">
                            <Image className="img2" src={img2} alt="a-man-using-laptop-2" />
                        </div>
                        <div className="middlebackground background-img3">
                            <Image className="backgroundimg3" src={middlebackgroundimg} alt="qua" />
                        </div>
                    </Col>
                    <Col class="position-relative">
                        <div class="col-md-8 justify-content-center">
                            <div class="search">
                                <i class="fa fa-search"></i>
                                <input type="text" class="form-control" placeholder="Bạn muốn học gì ?"/>
                                <button class="btn btn-primary">Tìm kiếm</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="Categories">
                <Row className="box">
                    <Col className="group-number-banner">
                        <Row className="group-student">
                            <div className="overlap-group">
                                <div className="text-wrapper">100M+</div>
                                <div className="div">Students</div>
                            </div>
                        </Row>
                        <Row className="group-professional">
                            <div className="group">
                                <div className="text-wrapper-2">10K+</div>
                                <div className="text-wrapper-3">Professionals</div>
                            </div>
                        </Row>
                        <Row className="group-trustpilot">
                            <div className="overlap-2">
                                <Row className="overlap-3">
                                    <div className="text-wrapper-4">5.0</div>
                                    <div className="group-2">
                                        <div className="text-wrapper-5">View our 1,602 reviews</div>
                                        <div className="overlap-group-2">
                                        <Image className="artboard" src={star1} alt="Artboard" />
                                        </div>
                                    </div>
                                    <h4 className="texttrust">
                                            Trustpilot
                                    </h4>
                                </Row>
                                <Image className="star" src={star2} alt="Star" />
                            </div>
                        </Row>
                        <Row className="group-category">
                            <div className="overlap-4">
                                <div className="text-wrapper-6">15+</div>
                                <div className="text-wrapper-7">Category</div>
                            </div>
                        </Row>
                        <Row className="group-livecourses">
                            <div className="overlap-5">
                                <div className="text-wrapper-8">60K+</div>
                                <div className="text-wrapper-9">Live Courses</div>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Col className='instruction'>
                    <h3 className='explore'>
                        Khám phá các danh mục hàng đầu
                    </h3>
                    <h5 className='click'>
                        Nhấp vào các danh mục và khám phá tất cả các khóa học
                    </h5>
                </Col>
            </Container>
            <Container className='popular'>
                <Row className='popularcontain'>
                    <h2 className='populartitle'>
                        Các khóa học phổ biến
                    </h2>
                </Row>
                <Row className='popularline1' style={{ gap: "30px" }}>
                    <Col className="cybersec">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Introduction to Cybersecurity Essentials</div>
                            <div className="div">25 Bài học</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">Cyber Security</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={ibm} />
                            <p className="text">
                                <span className="span">Kỹ năng bạn sẽ có được: </span>
                                <span className="text-wrapper-3">
                                {" "}
                                Security Engineering, Network Security, Cyber Attacks, Cryptography ...
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Tham gia</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
        
                    <Col className="datascience">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Data Science Fundamentals with Python and SQL</div>
                            <div className="div">16 Bài học</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">Data Science</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={ibm} />
                            <p className="text">
                                <span className="span">Kỹ năng bạn sẽ có được: </span>
                                <span className="text-wrapper-3">
                                {" "}
                                Python Programming, SQL, Data Structures, Databases, Data Analysis, Data Management
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Tham gia</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="aiml">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Machine Learning on Google Cloud</div>
                            <div className="div">10 Bài học</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">AI & ML</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={google} />
                            <p className="text">
                                <span className="span">Kỹ năng bạn sẽ có được:</span>
                                <span className="text-wrapper-3">
                                {" "}
                                        Machine Learning, Deep Learning, Python Programming, Cloud Computing
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Tham gia</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='popularline2' style={{ gap: "30px" }}>
                    <Col className="cybersec">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Introduction to Front-End Development</div>
                            <div className="div">25 Bài học</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">Front-End</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={meta} />
                            <p className="text">
                                <span className="span">Kỹ năng bạn sẽ có được: </span>
                                <span className="text-wrapper-3">
                                {" "}
                                HTML and CSS, Web Development
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Tham gia</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
        
                    <Col className="datascience">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Networking</div>
                            <div className="div">16 Bài học</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">Networking</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={cisco} />
                            <p className="text">
                                <span className="span">Kỹ năng bạn sẽ có được: </span>
                                <span className="text-wrapper-3">
                                {" "}
                                Windows Networking, Networking knowledge
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Tham gia</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="aiml">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Developing Back-End Apps with Node.js and Express</div>
                            <div className="div">38 Bài học</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">Back-end</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={meta} />
                            <p className="text">
                                <span className="span">Kỹ năng bạn sẽ có được: </span>
                                <span className="text-wrapper-3">
                                {" "}
                                Computer Programming, Web Development
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Tham gia</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='popularbutton'>
                    <Button className="explore">
                        <div className='buttontext'>Khám phá các khóa học</div>
                    </Button>
                </Row>
            </Container>
            <Container className='how' >
                
                <Image className='background2' src={Background} alt='Background2' />
                
                <Row className='howcodelordworks'>                    
                    <p>
                        <div className='koho-font'>
                            <span className='How'>Cách </span>
                            <span className="code code">Code</span> 
                            <span className="lord lord">Learn</span>
                            <span className='works'> hoạt động</span>
                        </div>
                        <div classname ="poppins-font" style={{position: 'relative', left: 850, top: -50,fontSize : '28px', textAlign:'left',width:'800px'}}>
                            <span className="code code" >Code</span> 
                            <span className="lord lord" >Learn</span>
                            <span className='Quoting'>là một trang web giáo dục về Công nghệ
                             Thông tin cung cấp các khóa học và tài nguyên hàng đầu
                              để nâng cao kỹ năng công nghệ của bạn.
                            </span>
                            
                        </div>
                    </p>
                </Row>    
                    
                <Col className='instruction'>                     
                    <Row className="boxsignup">
                        <div className="group-signup">
                            <div className="overlap-group">
                                <Link to="/signup">
                                <div className="overlap">
                                    <Image className="element-business" alt="Element business" src = {work}/>
                                </div>
                                <div className="text-wrapper">Đăng kí</div>
                                <p className="sign-up-for-a-free">
                                    <span className="span">Đăng ký </span>
                                    <span className="text-wrapper-2">tài khoản miễn phí</span>
                                    <span className="span"> tại </span>
                                    <span className="text-wrapper-2">Code </span>
                                    <span className="text-wrapper-3">Learn</span>
                                    <span className="text-wrapper-2">&nbsp;</span>
                                    <span className="span">để tiến bộ trong lĩnh vực Công nghệ Thông tin và thúc đẩy sự nghiệp của bạn.</span>
                                </p>
                                </Link>
                            </div>
                        </div>
                    </Row>
                    <Row className="boxsignup">
                        <div className="group-career">
                            <div className="overlap-group">
                                <div className="overlap">
                                    <Image className="element-target" alt="Element target" src = {target}/>
                                </div>
                                <div className="text-wrapper">Chọn lộ trình nghề nghiệp</div>
                                <p className="sign-up-for-a-free">
                                    <span className="span">Khám phá các khóa học theo nghề nghiệp: </span>
                                    <span className="text-wrapper-2">Front-end, Back-end, 
                                    Cybersecurity, Data Science and beyond. </span>
                                    
                                </p>
                            </div>
                        </div>
                    </Row>
                    <Row className="boxsignup">
                        <div className="group-payment">
                            <div className="overlap-group">
                                <div className="overlap">
                                    <Image className="element-credit-card" alt="Element creditcard" src = {credit_card}/>
                                </div>
                                <div className="text-wrapper">Thanh toán</div>
                                <Image className="woman_with_lap" src={woman} alt="a-woman-using-laptop" style={{position: 'absolute', left: 800,top: -590}}/> 
                                <p className="sign-up-for-a-free">
                                    <span className="span">Đối với các khóa học trả phí, chúng tôi chấp nhận thanh toán qua </span>
                                    <span className="text-wrapper-2">VISA</span>
                                    <span className="span"> hoặc </span>
                                    <span className="text-wrapper-2">Paypal</span>
                                </p>
                            </div>
                        </div>
                    </Row>
                </Col>
                    
            </Container>
            <Container className='FAQ'>
                <Row>
                    <Col className='find-here' md={6} >
                        <p>
                            <div>
                             <span className='poppins-font F-title'>Câu hỏi Thường gặp</span>
                            </div>
                            <div>
                                <span className='koho-font F-find'>Có câu hỏi nào không?</span>
                                <br/>
                                <span className='koho-font F-find'>Tìm ở đây</span>
                            </div>
                            <div>
                                <Link className="btn btn-login button-text poppins-font button-message" to="/">Gửi tin nhắn</Link>
                            </div>
                        </p>
                        <Image className="woman-FAQ" src={woman2} alt="a-woman-FAQ"/> 

                    </Col>

                    <Col className='questions' md={8}>
                        <div className='poppins-font'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className='ques'>
                                    <Accordion.Header>
                                        <p>Làm thế nào để tìm các khóa học phù hợp với nhu cầu của tôi?</p>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    CodeLearn là một trang web giáo dục về Công nghệ Thông tin cung cấp các khóa học và tài nguyên hàng đầu để nâng cao kỹ năng công nghệ của bạn.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1" className='ques'>
                                    <Accordion.Header>
                                        <p>
                                        Làm thế nào để liên hệ với
                                            <span className="code code"> Code</span> 
                                            <span className="lord lord">Learn </span> 
                                            nếu tôi gặp vấn đề hoặc có câu hỏi?
                                        </p>             
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    CodeLearn là một trang web giáo dục về Công nghệ Thông tin cung cấp các khóa học và tài nguyên hàng đầu để nâng cao kỹ năng công nghệ của bạn.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2" className='ques'>
                                    <Accordion.Header>
                                        <p>
                                            Liệu tôi có nhận được
                                            <span className="lord lord"> chứng chỉ </span> 
                                            sau khi hoàn thành khóa học không?
                                        </p>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    CodeLearn là một trang web giáo dục về Công nghệ Thông tin cung cấp các khóa học và tài nguyên hàng đầu để nâng cao kỹ năng công nghệ của bạn.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3" className='ques'>
                                    <Accordion.Header>
                                        <p>
                                            Làm thế nào để 
                                            <span className='lord lord'> tương tác </span> 
                                            với giảng viên và các học viên khác?
                                        </p>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    CodeLearn là một trang web giáo dục về Công nghệ Thông tin cung cấp các khóa học và tài nguyên hàng đầu để nâng cao kỹ năng công nghệ của bạn.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
      );
}

export default Home;