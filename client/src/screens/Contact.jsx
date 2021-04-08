import "./Contact.css";
function Contact(props) {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="form-area">
        <form
          className="contact-form"
          action="https://getform.io/f/aa1a10c4-64e0-46dc-a19d-0e5a4b4c87b0"
          method="POST"
        >
          <input className="input" type="text" name="name" placeholder="Name" />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="input"
            type="text"
            name="message"
            placeholder="Message"
          />
          <button className="submit-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
