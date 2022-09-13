import react from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import xavier from "../images/Xavier.jpg";
import federalAid from "../images/federalaid.jpg";
import fire from "../images/Fire.jpg";
import homeCss from "./Home.css";
import experience from "../images/icons8-certificate-100.png";
import money from "../images/icons8-exchange-90.png";
import staff from "../images/icons8-management-100.png";
import { send } from "emailjs-com";
import { useState } from "react";

import nav from "./NavBar.css";

const Home = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_l0ldf5g", "template_msjy814", toSend, "mPg_FyUhdBxNtlKUm")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const sanitize = () => {
    console.log("hello");
    setToSend({ from_name: "", to_name: "", message: "", reply_to: "" });
  };

  return (
    <div className="home">
      <header className="header">
        {" "}
        <h1 className="hvr-float"> XSM Consulting</h1>
        <h3>FEMA Public Assistance Disaster Recovery Consulting</h3>
      </header>

      <section className="section1">
        <p>
          XSM Consulting LLC assists with disaster recovery after a federally
          declared event. With more than $65,000,000 of funds obligated and
          hundreds of applicants assisted, XSM Consulting LLC services can
          enhance your road to recovery.
        </p>
        <div className="XavierImage">
          <img className="xavier" src={xavier} alt="tan man" />
          <p>Xavier Moreno, Owner and Lead Consultant</p>
        </div>
      </section>
      <section className="section4">
        <p>
          Welcome, if you are reading this, then you have most likely been
          impacted by a natural disaster leading to a federally declared event.
          My name is Xavier, first I would like to say I hope everything with
          you and your friends and family is doing as best as possible. My goal
          is to provide applicants a foundation for success to ensure the FEMA
          PA program is as smooth as a process for you as possible. No matter
          your next steps I recommend reviewing the resource guide and PA
          breakdown tabs to help you and your staff make informed decisions.{" "}
        </p>
        <p>
          If you have any questions that you would like to discuss please reach
          out and we will do our best to assist. We also send out periodic
          updates regarding FEMA disaster news impacting your road to recovery.
        </p>
      </section>
      <section className="section2">
        <div>
          <h2>Ways to Assist</h2>
        </div>
        <div className="section2div">
          <div>
            <p>
              The FEMA Public Assistance Program is a marathon not a sprint. We
              are a consulting company well versed in leading applicants through
              the paperwork and programmatic deadlines to enhance your FEMA
              reimbursement experience. From declaration date to obligation, you
              will be supported by experienced staff with hundreds of grants
              successfully processed.
            </p>
            <p>
              Knowing the ins and outs of the program is vital to minimizing
              delays and expediting the road to recovery. Our goal is to provide
              you with a foundation for success to cross the finish line as
              painlessly as possible. You will find a plethora of resources to
              assist you through the program including FEMA forms and one page
              summaries on various important topics.
            </p>
          </div>
          <img src={federalAid} alt="american flag amongst disaster" />
        </div>
      </section>

      <section className="section3">
        <div className="section3divs">
          {" "}
          <img src={experience} alt="certificate" />
          <h3>Relevant Experience</h3>
          <p>
            Our professionals have experience managing numerous FEMA grants
            throughout the country. From flooding, wildfires, hurricanes and
            global pandemics XSM Consulting provides professionals with
            exceptional knowledge of policy.
          </p>
        </div>
        <div className="section3divs">
          <img src={money} alt="certificate" />
          <h3>Money Managed</h3>
          <p>
            We have managed and successfully processed over $65,000,000 in
            federal disaster grants navigating through the FEMA Public
            Assistance (PA) program. Overseeing over $550,000,000 in PA funds
            for hundreds of applicants let us help you on the road to
            reimbursement.
          </p>
        </div>
        <div className="section3divs">
          <img src={staff} alt="certificate" />
          <h3>Qualified Professionals</h3>
          <p>
            Applicants can depend on qualified staff to handle their grant
            compliance and programmatic deadlines. All XSM Consulting
            professionals have been deemed qualified by FEMA after completing
            FEMA designated training and tasks specific to delivering the FEMA
            PA program.
          </p>
        </div>
      </section>
      <form onSubmit={onSubmit} className="submitForm">
        <div className="contact">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <input
            type="text"
            name="to_name"
            placeholder="To Whom"
            value={toSend.to_name}
            onChange={handleChange}
          />
        </div>
        <textarea
          style={{ rows: "15" }}
          className="message"
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <button onClick={sanitize} className="hvr-bob" type="submit">
          Submit
        </button>
      </form>
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

export default Home;
