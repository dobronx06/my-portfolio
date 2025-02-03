import "./Contact.css";
import ParticleTrail from "../Cursor/cursor2.js";
import NavbarMiddle from "../Navbar/navbar_middle.js";
import ContactForm from "../ContactForm/ContactForm.js";

function Contact() {
  return (
    <ParticleTrail style={{ height: "100vh" }}>
      <div className="flex flex-col items-center min-h-screen p-4 space-y-4">
        <ContactForm />
        <NavbarMiddle />
      </div>
    </ParticleTrail>
  );
}

export default Contact;
