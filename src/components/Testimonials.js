import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

import annisa from "../assets/img/author-annisa.jpg";
import fachri from "../assets/img/author-fachri.jpg";
import fikri from "../assets/img/author-fikri.jpg";
import julius from "../assets/img/author-julius.jpg";
import nibras from "../assets/img/author-nibras.jpg";
import tatu from "../assets/img/author-tatu.jpg";
import triMurdani from "../assets/img/author-tri.jpg";
// import obisalegi from "../assets/img/author-obisalegi.jpg";

export default function Testimonials() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="testimonials">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 className="mb-5">Testimonials</h2>

              <Carousel
                className="skill-slider-testimonial"
                responsive={responsive}
                infinite={true}
                swipeable={true}
                autoPlay={true}
                autoPlaySpeed={3000}
              >
                <div className="item">
                  <div className="col-md-10 mb-5 mb-md-0 d-flex align-items-stretch">
                    <div className="card testimonial-card">
                      <div
                        className="card-up"
                        style={{ backgroundColor: "#7a81a8" }}
                      ></div>
                      <div className="avatar mx-auto bg-white">
                        <img
                          src={julius}
                          className="rounded-circle img-fluid"
                        />
                      </div>
                      <div className="card-body" style={{ color: "black" }}>
                        <h4>Yulius Siregar</h4>
                        <p style={{ fontSize: 14 }} className="mb-4">
                          Web Developer <br /> PT. Fundo Sukses Bersama
                        </p>
                        <hr />
                        <p
                          className="mt-4"
                          style={{ color: "black", marginBottom: 24 }}
                        >
                          <i className="fa-quote-left"></i>Saya sudah kenal
                          dengan Aditria selama setahun lebih. Menurut saya
                          Aditria merupakan pribadi yang cekatan dan terus
                          menerus mau belajar dan beradaptasi dengan ilmu - ilmu
                          baru dalam dunia IT. Ini ditunjukkan dengan
                          kemampuannya dalam menyelesaikan masalah dan
                          kontribusi yang diberikan Aditria dalam projek -
                          projek yang ia kerjakan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="col-md-10 mb-5 mb-md-0 d-flex align-items-stretch">
                    <div className="card testimonial-card">
                      <div
                        className="card-up"
                        style={{ backgroundColor: "#6d5b98" }}
                      ></div>
                      <div className="avatar mx-auto bg-white">
                        <img
                          src={triMurdani}
                          className="rounded-circle img-fluid"
                        />
                      </div>
                      <div className="card-body" style={{ color: "black" }}>
                        <h4>Tri Murdani</h4>
                        <p style={{ fontSize: 14 }} className="mb-4">
                          Fullstack Developer <br /> PT. Sinergi Global Servis
                        </p>
                        <hr />
                        <p
                          className="mt-4"
                          style={{ color: "black", marginBottom: 24 }}
                        >
                          <i className="fa-quote-left"></i>Termasuk jiwa seorang
                          laki-laki yang fokus dalam pekerjaan. Menjadikan
                          dirinya dapat memberikan aura positif dan semangat
                          jika bekerja. Bekerja sama dengan Aditria merupakan
                          hal yang menyenangkan sekaligus menegangkan sehingga
                          dapat memacu diri kita menjadi lebih berwawasan luas
                          mengenai Teknologi. Aditria memiliki passion yang utuh
                          dibidang IT kemampuannya tidak diragukan dan mempunyai
                          semangat tinggi untuk terus belajar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="col-md-10 mb-5 mb-md-0 d-flex align-items-stretch">
                    <div className="card testimonial-card">
                      <div
                        className="card-up"
                        style={{ backgroundColor: "#9d789b" }}
                      ></div>
                      <div className="avatar mx-auto bg-white">
                        <img
                          src={annisa}
                          className="rounded-circle img-fluid"
                        />
                      </div>
                      <div className="card-body" style={{ color: "black" }}>
                        <h4>Annisa Shabrina</h4>
                        <p style={{ fontSize: 14 }} className="mb-4">
                          Software Quality Lead <br /> PT. Lion Parcel
                        </p>
                        <hr />
                        <p
                          className="mt-4"
                          style={{ color: "black", marginBottom: 24 }}
                        >
                          <i className="fa-quote-left"></i>Adit has a good
                          capability in programming. Several Languange type is
                          held by him especially PHP , Visual Basic and JAVA. He
                          is a good partner to work with and responsible for any
                          task assigned to him. I'm sure he can a be a hard
                          worker wherever he works.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="col-md-10 mb-5 mb-md-0 d-flex align-items-stretch">
                    <div className="card testimonial-card">
                      <div
                        className="card-up"
                        style={{ backgroundColor: "#7a81a8" }}
                      ></div>
                      <div className="avatar mx-auto bg-white">
                        <img src={tatu} className="rounded-circle img-fluid" />
                      </div>
                      <div className="card-body" style={{ color: "black" }}>
                        <h4>Ratu Tatu R.S.T.</h4>
                        <p style={{ fontSize: 14 }} className="mb-4">
                          IT Probation <br /> PT. Sinergi Global Servis
                        </p>
                        <hr />
                        <p
                          className="mt-4"
                          style={{ color: "black", marginBottom: 24 }}
                        >
                          <i className="fa-quote-left"></i>Berpegang teguh pada
                          tanggung jawab. Memiliki integritas tinggi. Pantang
                          menyerah sebelum semua terselesaikan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="col-md-10 mb-5 mb-md-0 d-flex align-items-stretch">
                    <div className="card testimonial-card">
                      <div
                        className="card-up"
                        style={{ backgroundColor: "#6d5b98" }}
                      ></div>
                      <div className="avatar mx-auto bg-white">
                        <img
                          src={nibras}
                          className="rounded-circle img-fluid"
                        />
                      </div>
                      <div className="card-body" style={{ color: "black" }}>
                        <h4>M. Nibras Abilowo</h4>
                        <p style={{ fontSize: 14 }} className="mb-4">
                          PPIC Lead <br /> PT. Sanwa Screen Indonesia
                        </p>
                        <hr />
                        <p
                          className="mt-4"
                          style={{ color: "black", marginBottom: 24 }}
                        >
                          <i className="fa-quote-left"></i>Profesional
                          Programmer. Good Comunication, Good Cooding. Best
                          Friend The Best!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="col-md-10 mb-5 mb-md-0 d-flex align-items-stretch">
                    <div className="card testimonial-card">
                      <div
                        className="card-up"
                        style={{ backgroundColor: "#9d789b" }}
                      ></div>
                      <div className="avatar mx-auto bg-white">
                        <img
                          src={fachri}
                          className="rounded-circle img-fluid"
                        />
                      </div>
                      <div className="card-body" style={{ color: "black" }}>
                        <h4>Fachri Fatchurrohman</h4>
                        <p style={{ fontSize: 14 }} className="mb-4">
                          Operation Manager <br /> PT. F2RLink Indonesia Jaya
                        </p>
                        <hr />
                        <p
                          className="mt-4"
                          style={{ color: "black", marginBottom: 24 }}
                        >
                          <i className="fa-quote-left"></i>Young talent,
                          professional, and inovated in world of IT.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="col-md-10 mb-0 d-flex align-items-stretch">
                    <div className="card testimonial-card">
                      <div
                        className="card-up"
                        style={{ backgroundColor: "#6d5b98" }}
                      ></div>
                      <div className="avatar mx-auto bg-white">
                        <img src={fikri} className="rounded-circle img-fluid" />
                      </div>
                      <div className="card-body" style={{ color: "black" }}>
                        <h4 className="mb-4">Fikri Fachrudin</h4>
                        <p style={{ fontSize: 14 }} className="mb-4">
                          IT Network <br /> PT. Cyberindo Aditama
                        </p>
                        <hr />
                        <p
                          className="dark-grey-text mt-4"
                          style={{ color: "black", marginBlock: 24 }}
                        >
                          <i className="fas fa-quote-left pe-2"></i>Adit a
                          Programmer and Business Man.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img
        src={colorSharp}
        className="background-image-left"
        alt="Color Sharp"
      />
    </section>
  );
}
