import React, { Component, createRef } from "react";

import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Masonry from "react-masonry-component";
import mixitup from "mixitup";
import { LightgalleryItem } from "react-lightgallery";

const GROUP1 = [
  "https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
  "https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
  "https://images.unsplash.com/photo-1551803021-92431219e83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
];

const GROUP2 = [
  "https://images.unsplash.com/photo-1551833726-deb5e781c68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1551803021-92431219e83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1551852284-ce16dd4d63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1551852284-ce16dd4d63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1551833726-deb5e781c68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1551803021-92431219e83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1551803021-92431219e83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1551852284-ce16dd4d63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
];

const PhotoItem = ({ category, gallery_category, order, img, text }) => (
  <div className={`mix ${category}`} data-order={order}>
    <div className="responsive">
      <Masonry>
        <div className="gallery">
          <LightgalleryItem group={gallery_category} src={img}>
            <img src={img} alt="" />
          </LightgalleryItem>
          {/* <div className="desc">{text}</div> */}
        </div>
      </Masonry>
    </div>
  </div>
);

const Button = ({ categoryName, dataFilter }) => (
  <button
    type="button"
    data-filter={`${dataFilter}`}
    style={{ width: "180px", margin: "15px", padding: "8px 15px" }}
    className="btn btn-outline-white"
  >
    {categoryName}
  </button>
);

class Gallery extends Component {
  componentDidMount() {
    this.mixer = mixitup(".container-gallery", {
      selectors: {
        target: ".mix"
      },
      animation: {
        duration: 300,
        effects: "fade stagger(100ms)",
        staggerSequence: function(i) {
          return 2 * i - 5 * (i / 3 - (1 / 3) * (i % 3));
        }
      }
    });
    this.mix_container.current.addEventListener("mixEnd", () => {
      this.forceUpdate();
    });
    this.forceUpdate();
  }

  mix_container = createRef();

  render() {
    const m_state = this.mixer ? this.mixer.getState() : undefined;
    if (m_state) {
      console.log(m_state.activeFilter.selector);
    }
    const { t } = this.props;

    return (
      <Fade>
        <section id="gallery" className="ftco-section-parallax">
          <div className="parallax-img d-flex align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-md-12 text-center heading-section heading-section-white ftco-animate">
                  <h2>{t("Gallery Title")}</h2>
                  <p>{t("Gallery Description")}</p>
                  <div
                    className=" text-center"
                    style={{
                      // margin: "2em  ",
                      // paddingTop: "2em",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    <Button
                      categoryName={t("Gallery Tab all")}
                      dataFilter="all"
                    />
                    {[GROUP1, GROUP2].map((_, idx) =>
                      idx === 0 ? (
                        <Button
                          key={idx}
                          categoryName={t("Gallery Tab 2")}
                          dataFilter={`.group_${idx}`}
                        />
                      ) : (
                        <Button
                          key={idx}
                          categoryName={t("Gallery Tab 1")}
                          dataFilter={`.group_${idx}`}
                        />
                      )
                    )}

                    <div ref={this.mix_container} className="container-gallery">
                      {[GROUP1, GROUP2]
                        .reduce((acc, current, idx) => {
                          return [
                            ...acc,
                            ...current.map(u => ({
                              url: u,
                              group: `group_${idx}`
                            }))
                          ];
                        }, [])
                        .map((po, idx) => (
                          <PhotoItem
                            key={idx}
                            img={po.url}
                            category={po.group}
                            gallery_category={
                              m_state &&
                              m_state.activeFilter.selector === ".mix"
                                ? "alls"
                                : po.group
                            }
                            order="1"
                            text="description"
                          />
                        ))}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "2em",
                    paddingTop: "2em",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  <iframe
                    title="video"
                    width="835"
                    height="470"
                    src="https://www.youtube-nocookie.com/embed/fnNh66l7GRI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}
export default withTranslation()(Gallery);
