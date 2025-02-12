import Card from "../Cards/Cards.js";
import "./Home.css";
import NavbarMiddle from "../Navbar/navbar_middle.js";

function Home() {
  return (
    <div>
      <div className="card-container">
        <div className="card-container-title">
          Projects
        </div>
        <Card title="Project_Moicano" content={"A first try at automating trades. In short this bot synchronises data from mutliples API's and retrieve the best promising tokens. It then gets all the promising tokens in a discord server with the best one highlighted, right now i've left the project at that but i am trying to find the time to implement a scraper to calculate social media scores. \n If you ever wander on the project, considering that I am using free Api's, the data retrieved is not really representative of the market, so do not take this as a financial advice !!!!"} imageUrl={require("../../images/moicano.webp")} />
        <Card title="MyRpg" content="This is some sample content for the first card." imageUrl={require("../../images/image.png")}/>
        <NavbarMiddle />
      </div>
    </div>
  );
}

export default Home;
