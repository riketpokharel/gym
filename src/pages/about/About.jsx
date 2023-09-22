import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea earum
        voluptatum aliquam explicabo ipsum quia animi placeat dicta voluptas.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              nemo enim consequatur cum quae dolores quo aspernatur vero
              expedita dignissimos culpa nostrum nobis magnam accusamus,
              accusantium ipsum quibusdam fugiat optio cum quae dolores quo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus totam, amet harum praesentium magnam quae eos minima.
              Facilis voluptate fugiat fugit magnam tenetur nisi. Cum.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              deleniti minima libero laudantium. Earum nostrum placeat vel
              dicta.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              nemo enim consequatur cum quae dolores quo aspernatur vero
              expedita dignissimos culpa nostrum nobis magnam accusamus,
              accusantium ipsum quibusdam fugiat optio cum quae dolores quo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus totam, amet harum praesentium magnam quae eos minima.
              Facilis voluptate fugiat fugit magnam tenetur nisi. Cum.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>

          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              nemo enim consequatur cum quae dolores quo aspernatur vero
              expedita dignissimos culpa nostrum nobis magnam accusamus,
              accusantium ipsum quibusdam fugiat optio cum quae dolores quo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus totam, amet harum praesentium magnam quae eos minima.
              Facilis voluptate fugiat fugit magnam tenetur nisi. Cum.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              deleniti minima libero laudantium. Earum nostrum placeat vel
              dicta.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
