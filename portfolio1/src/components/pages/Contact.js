import "./Contact.css";
import NavbarMiddle from "../Navbar/navbar_middle.js";
import ContactForm from "../ContactForm/ContactForm.js";

function Contact() {
  return (
    <div>
    <div className="contact-container">
        <ContactForm />
        <NavbarMiddle />
      </div>
    </div>
  );
}

export default Contact;
