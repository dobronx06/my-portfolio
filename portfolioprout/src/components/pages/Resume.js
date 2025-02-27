import NavbarMiddle from '../Navbar/navbar_middle.js';
import image from '../../images/photo_moi.png';
import './Resume.css';

const Resume = () => {
  return (
    <div className="prout">
      <div class="resume">
    <div className="header">
      <img src={image} alt="ImageMoi" className="photo"></img>
      <div class="header-info">
        <div class="name">Tom Bouchard</div>
        <div class="subtitle">Recherche de stage de 4 à 6 mois</div>
        <div class="personal-info">
          <div><strong>Nationalité</strong><br/>Française</div>
          <div><strong>Permis</strong><br/>B + véhicule personnel</div>
          <div><strong>Langue</strong><br/>Anglais B2<br/>Espagnol A2</div>
          <div>
            <strong>E-mail</strong><br/>tombouchard@gmail.com<br/>
            <strong>Portable</strong><br/>+33 7 68 89 83 88
          </div>
        </div>
      </div>
      <div class="about-me">
        <strong>À propos de moi</strong><br/><br/>
        Passionné par le développement, j'ai acquis de nombreuses compétences dans la création de programmes notamment en C. Mon intérêt pour le défi intellectuel et la résolution de problèmes me pousse à chercher à améliorer mes compétences et à trouver le moyen le plus efficace d'obtenir un résultat voulu.
      </div>
    </div>

    <div class="main-content">
      <div class="left-column">
        <div class="section">
          <div class="section-title">Hard Skills</div>
          <ul class="skills-list">
            <li>Langages de programmation C, C#, Python, C++</li>
            <li>Langues :
              <ul class="nested-list">
                <li>Anglais Cambridge B2</li>
                <li>Espagnol A2</li>
              </ul>
            </li>
            <li>Développement web : CSS, html, js, react</li>
            <li>Résolution de problèmes complexes</li>
          </ul>
        </div>

        <div class="section">
          <div class="section-title">Soft Skills</div>
          <ul class="skills-list">
            <li>Langues et communication</li>
            <li>Flexibilité et adaptation</li>
            <li>Fiabilité et respect des deadlines</li>
          </ul>
        </div>

        <div class="section-separator"></div>


        <div class="section">
          <div class="section-title">Centres intérêts</div>
          <ul class="skills-list">
            <li>Sports de combats</li>
            <li>Divertissement:
              <ul class="nested-list">
                <li>Cinéma</li>
                <li>Musique</li>
                <li>Art</li>
                <li>Jeux-Vidéos</li>
              </ul>
            </li>
            <li>Développement loisir de jeux vidéos</li>
          </ul>
        </div>
      </div>

      <div class="right-column">
        <div class="section-title">Formations</div>
        <div class="timelineprout">

          <div class="timelineprout-item">
            <div class="timelineprout-header">
              <div class="timelineprout-title">Baccalauréat Mathématiques Physique-Chimie SI</div>
              <div class="timelineprout-location">Perpignan 66000</div>
            </div>
            <div class="timelineprout-subtitle">Lycée Notre-Dame De Bonsecours</div>
            <div class="timelineprout-date">2020 <span class="date-arrow">→</span> 2023</div>
          </div>

        <div class="timelineprout-item">
            <div class="timelineprout-header">
              <div class="timelineprout-title">Programme Grande École</div>
              <div class="timelineprout-location">Montpellier 34000</div>
            </div>
            <div class="timelineprout-subtitle">Epitech - première année</div>
            <div class="timelineprout-date">2023 <span class="date-arrow">→</span> aujourd'hui</div>
          </div>

        </div>

        <div class="section-title">Expériences</div>
        <div class="timelineprout">
          <div class="timelineprout-item">
            <div class="timelineprout-header">
              <div class="timelineprout-title">Selesis Studio</div>
              <div class="timelineprout-location">Saint-Cyprien 66750</div>
            </div>
            <div class="timelineprout-subtitle">Stagiaire développeur</div>
            <div class="timelineprout-date">1 semaine <span class="date-arrow">→</span> Décembre 2019</div>
            <div class="timelineprout-description">
              Contribution au développement d'un jeu vidéo, apprentissage du C#, du logiciel Unity 3D et différents sites liés aux parties artistiques de la conception d'un jeu.
            </div>
          </div>

          <div class="timelineprout-item">
            <div class="timelineprout-header">
              <div class="timelineprout-title">Le petit marché - Emploi saisonnier</div>
              <div class="timelineprout-location">Saint-Cyprien 66750</div>
            </div>
            <div class="timelineprout-date">Juillet 2022/2023 <span class="date-arrow">→</span> Août 2022/2023</div>
            <div class="timelineprout-description">
              Manutention, vendeur dans un magasin primeur, fruits et légumes, fromagerie, épicerie, durant deux étés consécutifs.
            </div>
          </div>

          <div class="timelineprout-item">
            <div class="timelineprout-header">
              <div class="timelineprout-title">Le petit marché - Emploi saisonnier</div>
              <div class="timelineprout-location">Saint-Cyprien 66750</div>
            </div>
            <div class="timelineprout-date">Juillet 2023 <span class="date-arrow">→</span> Août 2023</div>
            <div class="timelineprout-description">
              Manutention, vendeur dans un magasin primeur, fruits et légumes, fromagerie, épicerie
            </div>
          </div>
          <div class="timelineprout-item">
            <div class="timelineprout-header">
              <div class="timelineprout-title">Le petit marché - Emploi saisonnier</div>
              <div class="timelineprout-location">Saint-Cyprien 66750</div>
            </div>
            <div class="timelineprout-date">Juillet 2023 <span class="date-arrow">→</span> Août 2023</div>
            <div class="timelineprout-description">
              Manutention, vendeur dans un magasin primeur, fruits et légumes, fromagerie, épicerie
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <NavbarMiddle />
    </div>
  );
};

export default Resume;