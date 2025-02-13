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
        <Card title="MyRpg" content="The MyRpg is an attempt at making a RolePlay Game, its an Epitech project completed by a group of 4-5 devs, we chose to go further than the 2D limit given in the project and did two parts in our game, with a Doom like system. You can see a video of the RPG in my Github. In short this project aimed to synthetize our C competence for the first year in a graphical project." imageUrl={require("../../images/image.png")}/>
        <Card title="Project_Moicano" content={"A first try at automating trades. In short this bot synchronises data from mutliples API's and retrieve the best promising tokens. It then gets all the promising tokens in a discord server with the best one highlighted, right now i've left the project at that but i am trying to find the time to implement a scraper to calculate social media scores. \n If you ever wander on the project, considering that I am using free Api's, the data retrieved is not really representative of the market, so do not take this as a financial advice !!!!"} imageUrl={require("../../images/moicano.webp")} />
        <NavbarMiddle />
      </div>
    </div>
  );
}

export default Home;
