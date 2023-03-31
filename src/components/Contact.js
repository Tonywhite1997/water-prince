import Input from "../UI/Input";

function Contact() {
  return (
    <main className="contact-page">
      <section className="address-wrapper">
        <div className="address">
          <h3>Water-Prince Nigeria LTD.</h3>
          <p>NO 4C Omisanjana</p>
          <p>Ado Ekiti</p>
          <p>Ekiti State</p>
        </div>
        <p>Website: waterprince.com.ng</p>
        <p>
          For more information about what we do, please contact us through the
          contact form and we will get back to you.
        </p>
      </section>
      <section className="form-wrapper">
        <p>Get in touch</p>
        <form>
          <Input label="Name*" />
          <Input label="Email*" />
          <Input label="Phone No*" />
          <textarea placeholder="Hello, I would love to know how much it would cost me for ***" />
          <div className="button-wrapper">
            <button>Send</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;
