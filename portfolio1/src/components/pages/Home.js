import { useEffect, useRef } from "react";
import Card from "../Cards/Cards.js";
import "./Home.css"; // Import CSS
import CursorEffect from "../cursor.js";
import NavbarMiddle from "../navbar_middle.js";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <CursorEffect />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Card title="Sample Card 1" content="This is some sample content for the first card." />
        <Card title="Sample Card 2" content="This is some sample content for the second card." />
        <Card title="Sample Card 1" content="This is some sample content for the first card." />
        <Card title="Sample Card 2" content="This is some sample content for the second card." />
      </div>
      <NavbarMiddle />
    </div>
  );
}

export default Home;
