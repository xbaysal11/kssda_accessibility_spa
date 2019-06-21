import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import { withTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import image_1 from "../assets/img/50605809_516659252155647_7538535789169213440_n.jpg";
import image_2 from "../assets/img/38878078_429647717523468_2305239364445143040_o.jpg";
import image_3 from "../assets/img/DSC_0040.JPG";
import image_4 from "../assets/img/DSC_0018.JPG";
import image_5 from "../assets/img/45099222_474542216367351_4772021030237503488_o.jpg";
import image_6 from "../assets/img/DSC_0047.JPG";
library.add(fab, fas);
// import person_1 from "../assets/img/DSC_0070.JPG";

const PhotoItem = ({ img, size }) => (
  <div className={`col-md-${size}`}>
    <div className="featured-img">
      {/* <div className="text-1 p-4 d-flex align-items-center">
      <h3>
        Racks
        <br />
        <span className="tag">Website</span>
      </h3>
    </div> */}
      <img src={img} className="img-fluid" alt="" />
      {/* <div className="text p-4 d-flex align-items-center">
      <div className="user d-flex align-items-center">
        <div
          className="user-img mr-3"
          style={{
            backgroundImage: `url(${person_1})`
          }}
        />
        <h3>
          John Bruce <br />
          <span className="position">Designer</span>
        </h3>
      </div>
    </div> */}
    </div>
  </div>
);

class AboutUs extends Component {
  render() {
    const { t } = this.props;
    return (
      <Fade>
        <div id="about-us" className="bg-light">
          <section className="ftco-section-featured ftco-animate">
            <div className="container-fluid" data-scrollax-parent="true">
              <div
                className="row no-gutters d-flex align-items-center"
                data-scrollax=" properties: { translateY: '-30%'}"
              >
                <PhotoItem img={image_1} size="3 mb-3" />
                <div className="col-md-6">
                  <div className="row no-gutters">
                    <div className="col-md-12">
                      <div className="row no-gutters d-flex align-items-end">
                        <PhotoItem img={image_5} size={8} />
                        <PhotoItem img={image_4} size={4} />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="row no-gutters d-flex align-items-start">
                        <PhotoItem img={image_6} size={8} />
                        <PhotoItem img={image_3} size={4} />
                      </div>
                    </div>
                  </div>
                </div>
                <PhotoItem img={image_2} size={3} />
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-md-8 text-center heading-section ftco-animate">
                  <h1>
                    <div className="row-block3">
                      <FontAwesomeIcon
                        className="bg-quote bg-quote-left"
                        icon={["fas", "quote-left"]}
                        size="2x"
                      />
                      <span className="about-us-text">
                        {t("About Us Text")}
                      </span>
                      <FontAwesomeIcon
                        className="bg-quote bg-quote-right"
                        icon={["fas", "quote-right"]}
                        size="2x"
                      />
                    </div>

                    <br />
                    <br />
                    <span style={{ color: "#7B7B7B" }}>
                      {t("About Us Autor")}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Fade>
    );
  }
}
export default withTranslation()(AboutUs);
