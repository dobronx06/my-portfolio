import "./Contact.css";
import NavbarMiddle from "../Navbar/navbar_middle.js";
import ContactForm from "../ContactForm/ContactForm.js";
import CursorEffect from "../Cursor/cursor.js";

function Contact() {
  return (
    <div>
    <CursorEffect/>
    <div className="contact-container">
        <ContactForm />
        <NavbarMiddle />
      </div>
    </div>
  );
}

export default Contact;
