import Card from "../Cards/Cards.js";
import "./Home.css";
import CursorEffect from "../Cursor/cursor.js";
import NavbarMiddle from "../Navbar/navbar_middle.js";

function Home() {
  return (
    <div>
      <CursorEffect/>
      <div className="card-container">
        <Card title="Greg" content={"I'm a software engineer with a passion for creating and learning. I have experience with full-stack development, and I'm always looking for new opportunities to grow."} imageUrl={"https://avatars.githubusercontent.com/u/77426507?v=4"} />
        <Card title="MyRpg" content="This is some sample content for the first card." imageUrl={"https://avatars.githubusercontent.com/u/77426507?v=4"}/>
        <NavbarMiddle />
      </div>
    </div>
  );
}

export default Home;
