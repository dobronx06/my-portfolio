import { useEffect, useRef } from "react";
import Card from "../Cards.js";
import "./Home.css"; // Import CSS
import CursorEffect from "../cursor.js";

function Home() {
  return (
    <div>
    <CursorEffect>
      </CursorEffect>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <Card title="Sample Card 1" content="This is some sample content for the first card." />
            <Card title="Sample Card 2" content="This is some sample content for the second card." />
        </div>
    </div>
  );
}

export default Home;
