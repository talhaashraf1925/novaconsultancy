"use client";
import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  const slides = [
    {
      title: "From Concept To Execution",
      subtitle: "Empowering Your Business Through Smart IT Solutions",
      desc: "We turn ideas into powerful digital solutions. Our expert team delivers scalable and secure solutions tailored to your unique needs.",
    },
    {
      title: "Best IT Solutions",
      subtitle: "Your All-in-One IT Solutions for Business Success",
      desc: "Custom Web Development Web Application Security Mobile Apps Development Digital Marketing and E-commerce Development.",
    },
  ];

  // Second slider config (show 3 slides)
  const sliderTwoSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const projects = [
    {
      title: "Online Classes",
      desc: "Online Classes is a comprehensive global e-learning platform designed to deliver high-quality education to students worldwide",
      image: "/images/Projects/project1.jpeg",
      mainImage: "/images/Projects/project7.png",
      sliderImgs: [
        "/images/Projects/project-detail1.png",
        "/images/Projects/project-detail2.png",
        "/images/Projects/project-detail3.png",
        "/images/Projects/project-detail4.png",
        "/images/Projects/project-detail5.png",
      ],
    },
    {
      title: "CodeSpark AI",
      desc: "An intelligent coding assistant where users can describe requirements in natural language, and the AI generates complete",
      image: "/images/Projects/project2.jpg",
      mainImage: "/images/Projects/project2.jpg",
      sliderImgs: [
        "/images/Projects/2ndprojectdetail1.jpeg",
        "/images/Projects/2ndprojectdetail2.jpeg",
        "/images/Projects/2ndprojectdetail3.jpeg",
      ],
    },
    {
      title: "Interview Prep",
      desc: "An AI-powered platform where users can practice with a virtual agent, get real-time feedback, and build confidence for job",
      image: "/images/Projects/project3.png",
      mainImage: "/images/Projects/project3.png",
      sliderImgs: [
        "/images/Projects/3detailproject1.png",
        "/images/Projects/3detailproject2.png",
        "/images/Projects/3detailproject3.png",
        "/images/Projects/3detailproject4.png",
      ],
    },
    {
      title: "Verdant AI",
      desc: "An AI and ML-powered plant care assistant that helps users monitor plant health, optimize growth, and receive personalized",
      image: "/images/Projects/project4.png",
      mainImage: "/images/Projects/project4.png",
      sliderImgs: [
        "/images/Projects/4detailproject1.jpeg",
        "/images/Projects/4detailproject2.jpeg",
        "/images/Projects/4detailproject3.jpeg",
        "/images/Projects/4detailproject4.jpeg",
      ],
    },
    {
      title: "Salman Restaurant",
      desc: "A student wallet app for mess and hostel payments, featuring seamless QR code integration for quick transactions.",
      image: "/images/Projects/project5.jpeg",
      mainImage: "/images/Projects/project5.jpeg",
      sliderImgs: [
        "/images/Projects/5Detailproject1.png",
        "/images/Projects/5Detailproject2.png",
        "/images/Projects/5Detailproject3.png",
        "/images/Projects/5Detailproject4.png",
      ],
    },
    {
      title: "BISE Multan",
      desc: "This project for BISE Multan provides a secure and efficient online portal for the verification of academic certificates.",
      image: "/images/Projects/project6.png",
      mainImage: "/images/Projects/project6.png",
      sliderImgs: [
        "/images/Projects/6Detailpage1.png",
        "/images/Projects/6Detailpage2.png",
      ],
    },
  ];
  return (
    <>
      <div className="main">
        <section className="hero">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="detail pt-[220px] md:pt-[160px] lg:pt-[200px] text-center text-white">
                  <Slider {...settings}>
                    {slides.map((slide, index) => (
                      <div key={index} className="px-4">
                        {" "}
                        {/* padding for small devices */}
                        <h1 className="text-[50px] md:text-[220px] lg:text-[300px] font-bold leading-tight">
                          {slide.title}
                        </h1>
                        <div className="mt-4">
                          <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-[35px] font-bold">
                            {slide.subtitle}
                          </h3>
                          <p className="text-md sm:text-base md:text-lg lg:text-[20px] pt-[12px] whitespace-pre-line">
                            {slide.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      {/* // Section Services */}
      <section className="services py-5 bg-[#FAFBFC]">
        <div className="text-center pt-[50px]">
          <h1 className="text-[65px] text-[#1E3A8A] fw-bold">
            Our IT Services
          </h1>
          <p className="text-[22px] text-[#475569]">
            Pioneering solutions we provide to accelerate your business success
            and digital<br></br> transformation.
          </p>
        </div>
        <Container>
          <Row className="gy-4 justify-content-center pt-[30px]">
            <Col lg={4} md={6} sm={12} col={12}>
              <Card className="p-3 bg-white rounded-4  border-0">
                <CardBody>
                  <Image
                    src="/images/Services/1.PNG"
                    width={90}
                    height={80}
                  ></Image>
                  <div className="card-detail pt-[20px]">
                    <h3 className="fw-bold">Digital Marketing</h3>
                    <p className="pt-[10px] text-[21px] text-[#475569]">
                      Comprehensive digital marketing<br></br> solutions to
                      boost your online<br></br> presence, reach your target
                      <br></br> audience, and drive sustainable<br></br> growth.
                      We provide end-to-end<br></br> digital marketing services
                      that<br></br> deliver measurable results for your<br></br>{" "}
                      brand audience, and boost your<br></br> business through
                      smart digital<br></br> strategy execution.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} col={12}>
              <Card className="p-3 bg-white rounded-4 h-100  border-0">
                <CardBody>
                  <Image
                    src="/images/Services/2.PNG"
                    width={90}
                    height={80}
                  ></Image>
                  <div className="card-detail pt-[20px]">
                    <h3 className="fw-bold">SMM</h3>
                    <p className="pt-[10px] text-[21px] text-[#475569]">
                      We amplify your brand's voice<br></br> across all major
                      social media<br></br>platforms through strategic<br></br>{" "}
                      content creation, community<br></br> management, and
                      targeted<br></br> advertising campaigns. Our data-
                      <br></br> driven social media optimization<br></br> and
                      reporting system help you get<br></br> better SMM results.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} col={12}>
              <Card className="card p-3 bg-white h-100 rounded-4 border-0">
                <CardBody>
                  <Image
                    src="/images/Services/3.PNG"
                    width={90}
                    height={80}
                  ></Image>
                  <div className="card-detail pt-[20px]">
                    <h3 className="fw-bold">SEO Optimization</h3>
                    <p className="pt-[10px] text-[21px] text-[#475569]">
                      Our advanced SEO strategies are<br></br>
                      engineered to boost your search<br></br>
                      engine rankings and attract<br></br>
                      high-quality organic traffic. We<br></br>
                      optimize websites for better<br></br>
                      visibility, technical SEO, and<br></br>
                      content optimization to ensure<br></br>
                      top-tier rankings, driving quality,<br></br>
                      high-converting traffic to achieve<br></br>
                      compelling organic results.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} col={12}>
              <Card className="card p-3 bg-white rounded-4 border-0">
                <CardBody>
                  <Image
                    src="/images/Services/4.PNG"
                    width={90}
                    height={80}
                  ></Image>
                  <div className="card-detail pt-[20px]">
                    <h3 className="fw-bold">Shopify</h3>
                    <p className="pt-[10px] text-[21px] text-[#475569]">
                      Professional e-commerce solutions<br></br>
                      and expertise on Shopify stores<br></br>
                      designed to maximize sales,<br></br>
                      conversions and overall performance.<br></br>
                      Our team creates stunning,<br></br>
                      user-experiences, powerful backend<br></br>
                      functionality, and data-driven<br></br>
                      optimization to solve key business<br></br>
                      challenges. Custom solutions tailored<br></br>
                      for e-commerce platforms to unlock<br></br>
                      sales success.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} col={12}>
              <Card className="card p-3 bg-white h-100 rounded-4 border-0">
                <CardBody>
                  <Image
                    src="/images/Services/5.PNG"
                    width={90}
                    height={80}
                  ></Image>
                  <div className="card-detail pt-[20px]">
                    <h3 className="fw-bold">Web Development</h3>
                    <p className="pt-[10px] text-[21px] text-[#475569]">
                      We create responsive, high<br></br>-performance websites
                      that not<br></br>only look great but perform<br></br>
                      flawlessly and engage visitors. Our comprehensive web
                      development<br></br>
                      process ensures your site is fast,<br></br>
                      fully mobile-optimized and user<br></br>-friendly. We
                      deliver standout<br></br>brand experiences that convert
                      <br></br>visitors into customers.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} col={12}>
              <Card className="card p-3 bg-white h-100 rounded-4 border-0">
                <CardBody>
                  <Image
                    src="/images/Services/6.PNG"
                    width={90}
                    height={80}
                  ></Image>
                  <div className="card-detail pt-[20px]">
                    <h3 className="fw-bold">AI Automation</h3>
                    <p className="pt-[10px] text-[21px] text-[#475569]">
                      Transform your business<br></br>processes and boost
                      efficiency by streamlining your operations and<br></br>{" "}
                      enhance productivity with AI<br></br>solutions. We build
                      custom AI<br></br>solutions that automate complex
                      processes, quickly validate ideas<br></br>, and help
                      deliver insights that give<br></br> your business a
                      competitive edge<br></br> in the modern business
                      landscape.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Client Section */}
      <section className="clients py-5 bg-[#FAFBFC]">
        <div className="text-center pt-[50px]">
          <h1 className="text-[70px] text-[#1E3A8A] fw-bold">
            What Our Clients Say
          </h1>
        </div>
        <div className="my-5">
          <Container>
            <div className="position-relative">
              {/* Custom Bootstrap Navigation Buttons */}
              <button
                className="btn bg-light rounded-circle position-absolute top-50 start-0 translate-middle-y z-3 swiper-button-prev"
                style={{ width: "45px", height: "45px" }}
              >
                ❮
              </button>
              <button
                className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y z-3 swiper-button-next"
                style={{ width: "45px", height: "45px" }}
              >
                ❯
              </button>

              {/* Swiper */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {/* Card 1 */}
                <SwiperSlide>
                  <Card className="p-3 bg-white rounded-3 text-center border-0 shadow-sm">
                    <Card.Body>
                      <p className="fs-5 text-secondary">
                        "Their digital marketing expertise helped us reach new
                        markets across 3 countries. The ROI on our campaigns
                        improved by 250% within just 6 months of working with
                        Nova Consultancy."
                      </p>
                      <div className="mt-3">
                        <img
                          src="/images/Clients/testimonial-3.jpg"
                          width={80}
                          height={80}
                          alt="Sofiya"
                          className="rounded-circle border border-3 border-light"
                        />
                        <h5 className="fw-bold mt-2">Sofiya</h5>
                        <p className="text-primary mb-0">
                          Founder, FinTech Innovations
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                {/* Card 2 */}
                <SwiperSlide>
                  <Card className="p-3 bg-white rounded-3 text-center border-0 shadow-sm">
                    <Card.Body>
                      <p className="fs-5 text-secondary">
                        "The custom ERP system they built for us has
                        revolutionized our operations. What used to take days
                        now takes minutes. Their understanding of complex
                        business processes is second to none."
                      </p>
                      <div className="mt-3">
                        <img
                          src="/images/Clients/testimonial-4.jpg"
                          width={80}
                          height={80}
                          alt="Sofiya"
                          className="rounded-circle border border-3 border-light"
                        />
                        <h5 className="fw-bold mt-2">Lucas Lee</h5>
                        <p className="text-primary mb-0">
                          COO, HealthWell Group
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                {/* Card 2 */}
                <SwiperSlide>
                  <Card className="p-3 bg-white rounded-3 text-center border-0 shadow-sm">
                    <Card.Body>
                      <p className="fs-5 text-secondary">
                        "Working with Nova on our AI-powered recommendation
                        engine was a game-changer. Our conversion rates have
                        increased by 60%, and our customers love the
                        personalized shopping experience."
                      </p>
                      <div className="mt-3">
                        <img
                          src="/images/Clients/testimonial-5.jpg"
                          width={80}
                          height={80}
                          alt="Sofiya"
                          className="rounded-circle border border-3 border-light"
                        />
                        <h5 className="fw-bold mt-2">David Miller</h5>
                        <p className="text-primary mb-0">
                          Head of IT, SecureNet
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>

                {/* Card 2 */}
                <SwiperSlide>
                  <Card className="p-3 bg-white rounded-3 text-center border-0 shadow-sm">
                    <Card.Body>
                      <p className="fs-5 text-secondary">
                        "Nova Consultancy transformed our business with their
                        exceptional web development services. The team delivered
                        beyond our expectations, creating a platform that
                        increased
                      </p>
                      <div className="mt-3">
                        <img
                          src="/images/Clients/testimonial-7.jpg"
                          width={80}
                          height={80}
                          alt="Sofiya"
                          className="rounded-circle border border-3 border-light"
                        />
                        <h5 className="fw-bold mt-2">Pariya sharma</h5>
                        <p className="text-primary mb-0">
                          CEO, TechStart Solutions
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </div>
          </Container>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="review py-5 bg-[#1E3A8A]">
        <Container>
          <Row className="gy-3 justify-content-center">
            <Col lg={3} md={6} sm={12} col={12}>
              <Card className="card !bg-[#40579B] py-3 text-white rounded-4 text-center">
                <CardBody>
                  <div>
                    <h1 className="text-[70px] fw-bold">
                      <CountUp end={99} duration={3} />+
                    </h1>
                    <p className="text-[23px]">Happy Customers</p>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} sm={12} col={12}>
              <Card className="!bg-[#40579B] py-3 text-white rounded-4 text-center">
                <CardBody>
                  <div>
                    <h1 className="text-[70px] fw-bold">
                      <CountUp end={45} duration={3} />
                    </h1>
                    <p className="text-[23px]">Successful Projects</p>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} sm={12} col={12}>
              <Card className="!bg-[#40579B] py-3 text-white rounded-4 text-center">
                <CardBody>
                  <div>
                    <h1 className="text-[70px] fw-bold">
                      <CountUp end={120} duration={3} />
                    </h1>
                    <p className="text-[23px]">Total Clients</p>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3} md={6} sm={12} col={12}>
              <Card className="!bg-[#40579B] py-3 text-white rounded-4 text-center">
                <CardBody>
                  <div>
                    <h1 className="text-[70px] fw-bold">
                      <CountUp end={5} duration={3} />+
                    </h1>
                    <p className="text-[23px]">Star Reviews</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Projects Section */}
      <section className="projects py-5 bg-[#FAFBFC]">
        <Container>
          <div className="text-center pt-[50px]">
            <h1 className="text-[65px] text-[#1E3A8A] fw-bold">
              Our Amazing Projects
            </h1>
            <p className="text-[22px] text-[#475569]">
              A glimpse into the innovative solutions and successful outcomes
              we've delivered for our<br></br> clients.
            </p>
          </div>
          <Row className="gy-3 pt-[40px]">
            {projects.map((project, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4"
              >
                <Card className="p-2 h-100">
                  <CardBody>
                    <div>
                      <img
                        src={project.image}
                        alt=""
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="project-detail mt-3">
                      <h3 className="fw-bold">{project.title}</h3>
                      <p className="text-[#949FAF] text-[18px]">
                        {project.desc}
                      </p>
                      <div>
                        <Link
                          href={{
                            pathname: "/DetailPage",
                            query: {
                              title: project.title,
                              desc: project.desc,
                              image: project.mainImage,
                              sliderImgs: JSON.stringify(project.sliderImgs),
                            },
                          }}
                        >
                          <button className="btn w-100 border py-2 fw-bold text-[30px]">
                            View Case Study
                          </button>
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </Row>
        </Container>
      </section>
      {/* Request quote */}
      <section className="chats py-5 bg-[#E6F4FE]">
        <Container className="bg-white p-5 rounded-3">
          <Row className="gy-3 justify-content-center">
            <Col lg={5}>
              <div>
                <h1 className="text-[40px] text-[#1E3A8A] fw-bold">
                  Let's Discuss Your Project
                </h1>
                <p className="text-[19px]">
                  We're here to help you achieve your business goals.<br></br>{" "}
                  Reach out to us for a free consultation.
                </p>
              </div>
              <div className="detail">
                <div className="info d-flex gap-3 bg-[#F8FAFC] p-3 rounded-4">
                  <div className="mt-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-[30px] text-[#1E3A8A]"
                    />
                  </div>
                  <div>
                    <h5 className="text-[#1E3A8A] fw-bold">Email Us</h5>
                    <p>Support@novaconsultancyy.com</p>
                  </div>
                </div>
                <div className="info mt-3 d-flex gap-3 bg-[#F8FAFC] p-3 rounded-4">
                  <div className="mt-2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-[30px] text-[#1E3A8A]"
                    />
                  </div>
                  <div>
                    <h5 className="text-[#1E3A8A] fw-bold">Phone</h5>
                    <p>+44 7517231456</p>
                  </div>
                </div>
                <div className="info mt-3  gap-3 bg-[#F8FAFC] p-3 rounded-4">
                  <div>
                    <h5 className="text-[#1E3A8A] fw-bold">Follow Us</h5>
                    <div className="d-flex gap-2">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="border p-1 text-[25px]"
                      />
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="border p-1 text-[25px]"
                      />
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="border p-1 text-[25px]"
                      />
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="border p-1 text-[25px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="">
                <h1 className="text-[#1E3A8A] fw-bold">Send A Message</h1>
              </div>
              <div className="contact-detail mt-4">
                <form action="">
                  <Row className="gy-3">
                    <Col lg={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="form-control py-3"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="form-control py-3"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="form-group">
                        <input
                          type="mail"
                          placeholder="Email Address"
                          className="form-control py-3"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="form-group">
                        <input
                          type="phone"
                          placeholder="Phone Number"
                          className="form-control py-3"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="form-group">
                        <textarea rows={4} className="form-control" placeholder="Your Message">
                          
                        </textarea>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div>
                         <button className="bg-[#3C68B0] text-white w-100 py-3 rounded">Send Message</button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
