import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DetailPage() {
  const router = useRouter();
  const { title, desc, image, sliderImgs } = router.query;

  // Parse images safely
  let slides = [];
  try {
    slides = sliderImgs ? JSON.parse(sliderImgs) : [];
  } catch (err) {
    slides = [];
  }

  return (
    <section className="py-3 bg-[#EBF6FE]">
      <div className="text-center pt-[140px]">
        <h1 className="text-[70px] fw-bold">{title}</h1>
      </div>
      <Container className="mt-5 py-5">
        <Row className="justify-content-center text-center">
          <Col lg={12}>
            <div
              className="mt-4 bg-white rounded-3"
              style={{ border: "5px solid #EFF1FC", borderWidth: "20px" }}
            >
              <img src={image} alt="" className="img-fluid w-75" />
            </div>
            <div className="text-center pt-[70px]">
              <p className="text-[22px]">{desc}</p>
            </div>
          </Col>
          <Col lg={12}>
            <div className="pt-[100px]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: false }}
                autoplay={{ delay: 3000 }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                className="w-100 mx-auto"
              >
                {slides.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} className="img-fluid w-100" alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
