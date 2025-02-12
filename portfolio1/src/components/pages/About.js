import "./About.css";
import NavbarMiddle from "../Navbar/navbar_middle.js";
import CursorEffect from "../Cursor/cursor.js";
import { Timeline } from "../Timeline/Timeline.js";

function About() {
  return (
    <div>
    <CursorEffect/>
    <div className="about-container">
        <Timeline />
        <NavbarMiddle />
      </div>
    </div>
  );
}

export default About;
