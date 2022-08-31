import React from "react";
import { Link } from "react-router-dom";
import resourcesCSs from "./Resources.css";
import irma from "../images/hurricane.jpg";

const Resources = () => {
  return (
    <div className="resources">
      <nav className="navbar">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/resources">
          FEMA PA
        </Link>
        <Link className="navLink" to="/aboutUs">
          About XSM
        </Link>
      </nav>
      <div className="resourcesSection1">
        <div>
          <h1>What is FEMA Public Assistance</h1>
          <h3>Stafford Act</h3>
          <p>
            The Stafford Act is what gives FEMA the legal authority to assist
            and fund federally declared disasters. It's important that you read
            and understand it. Get your copy here. There are several different
            sections that apply to FEMA Public Assistance. This will help you to
            understand what section(s) authorizes your disaster funding.
          </p>
          <h3>Code of Federal Regultions CFR 44</h3>
          <p>
            This is the book of rules that govern how FEMA does business in
            general. Pay special attention to Part 13, that's the money chapter.
            You'll also need to become very familiar with Part 206. It describes
            the policies and procedures for implementing Public Law 93-288 (the
            Stafford Act). Get your e-CFR 44 here.
          </p>
          <h3>FEMA Policy and Guidance</h3>
          <p>
            FEMA Policy and Guidance (9500 Series) is basically FEMA's
            interpretation of the Statutes (Stafford Act) and FEMA regulations
            (CFR 44). It is a compendium of policies FEMA has developed over the
            years to address various issues that have arisen during past and
            present disaster recovery operations. You absolutely need this as
            well as the Policy Digest. Get yours here. 9500 Policy Series and
            Public Assistance Policy Digest. These are the documents FEMA will
            use to determine your eligibility issues, should any arise.
          </p>
        </div>
        <div>
          <img src={irma} alt="hurricane irma" />
        </div>
      </div>
      <div className="resourcesSection2">
        <h1>So how does FEMA work?</h1>
        <h3>It all starts with your state govenor</h3>
        <p>
          fter a disaster strikes, your governor needs to declare a state of
          emergency and ask for federal assistance. Only then can FEMA step in
          and provide assistance. At that point the President has three options
          for providing assistance. An Emergency Declaration, Major Disaster
          Declaration, or no assistance. But you learned all that when you read
          the Stafford Act, didn't you!
        </p>
        <h3>It's actually a state program</h3>
        <p>
          That's' right, but it's federally funded. That's why FEMA stays so
          involved. It's their money, and most states don't have the resources
          to administer it, and FEMA does. The state becomes the Grantee
          (applicant) of the grants, local governments and Private Non Profits
          (PNP's) become the sub-grantees (sub-applicants). It's important that
          you develop and maintain a good relationship with your state emergency
          management personnel that are administrating the program.
        </p>
        <h3>Applicants briefing. What's that?</h3>
        <p>
          Once there is an actual declaration, the state, with FEMA, will host a
          series of applicant briefings. This is where you learn about the FEMA
          programs, and make a Request For Public Assistance (RPA). get one here
          Nothing happens until it's completed and presented to the state and
          forwarded to FEMA.
        </p>
        <h3>Kick Off Meeting. That's where it all really starts.</h3>
        <p>
          After FEMA receives the RPA they will assign personnel to contact you
          and set up a Kick Off Meeting. This is when you will learn more about
          the FEMA programs, and set a time for FEMA (and perhaps their state
          counterparts) to inspect your damage. Keep in mind, FEMA is
          re-engineering the PA program. The titles of FEMA personnel and the
          delivery of the program is subject to change at any time. (more on
          this in another section)
        </p>
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

export default Resources;
