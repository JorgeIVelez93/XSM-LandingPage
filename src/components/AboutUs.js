import react from "react";
import { Link } from "react-router-dom";
import business from "../images/What-is-Business-Strategy.jpg";
import handshake from "../images/home.jpg";
import about from "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutUs">
        <section className="aboutUsSection1">
          <h1>Our Purpose</h1>
          <p>
            Telesforo Consulting, LLC was founded to deliver top quality
            consulting services to federal, state, local, and private entities.
            Our mission is to augment project teams by providing our partners
            access to the highest quality technical staff available. Telesforo
            Consulting, LLC’s nationwide network of knowledgeable, experienced,
            and adaptable professionals is prepared to deploy on short notice to
            supply seamless support to new and existing teams. Telesforo has a
            proven record of understanding clients’ specific project needs and
            providing the best candidates for the job.{" "}
          </p>
        </section>
        <section>
          <img src={business} alt="business" />
        </section>
      </div>
      <div className="aboutUs2">
        <section>
          <img src={handshake} alt="business" />
        </section>
        <section className="aboutUsSection2">
          <h1>Our Mission</h1>
          <p>
            Telesforo Consulting, LLC was founded to deliver top quality
            consulting services to federal, state, local, and private entities.
            Our mission is to augment project teams by providing our partners
            access to the highest quality technical staff available. Telesforo
            Consulting, LLC’s nationwide network of knowledgeable, experienced,
            and adaptable professionals is prepared to deploy on short notice to
            supply seamless support to new and existing teams. Telesforo has a
            proven record of understanding clients’ specific project needs and
            providing the best candidates for the job.{" "}
          </p>
        </section>
      </div>
      <footer>
        <h2>Have any questions?</h2>
        <h3>Reach out!</h3>

        <li>XSMConsulting@gmail.com</li>
        <li>786-222-9737</li>
        <li>
          <a href="https://www.linkedin.com/in/xaviersmoreno/">Linkedin</a>
        </li>
      </footer>
    </div>
  );
};

export default AboutUs;
