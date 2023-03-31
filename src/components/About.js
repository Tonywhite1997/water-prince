import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">
      <div className="company-name">
        <h1>Water-Prince Nigeria Limited</h1>
      </div>
      <div className="about-page-container">
        <p className="top-text">
          At Water-Prince Nigeria Limited, we are committed to providing
          reliable and high-quality borehole drilling services to our clients.
          With years of experience in the industry, we have built a reputation
          for excellence and professionalism.
        </p>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to exceed our clients' expectations by delivering
            safe, sustainable, and efficient borehole solutions. We believe in
            honesty, transparency, and open communication with our clients,
            which allows us to establish trust and build long-term
            relationships.
          </p>
        </div>
        <div className="team">
          <h2>Our Team</h2>
          <p>
            Our team of experts is highly trained and experienced in all aspects
            of borehole drilling, cleaning, pump installation, and maintenance.
            We use the latest technology and equipment to ensure that our
            services are performed efficiently and effectively.
          </p>
        </div>
        <div className="areas">
          <h2>Focused Areas</h2>
          <p>
            We offer our services to clients across Nigeria, including
            residential, commercial, and industrial markets. Our team is
            dedicated to providing exceptional customer service, and we strive
            to make every client feel heard and supported throughout the entire
            process.
          </p>
        </div>
        <div className="superpower">
          <h2>Our Superpower</h2>
          <p>
            We understand that every client's needs are unique, and we take the
            time to listen to our clients' concerns and preferences. Our goal is
            to provide customized solutions that meet each client's specific
            needs and budget.
          </p>
        </div>
        <p>
          We invite you to explore our website to learn more about our services,
          and please do not hesitate to{" "}
          <Link to="/contact-us" className="contact-page-link">
            contact us
          </Link>{" "}
          if you have any questions or would like to schedule a consultation.
        </p>
      </div>
    </main>
  );
}

export default About;
