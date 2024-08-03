import React from "react";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseCrack, faPaw, faSeedling, faMountainSun, faFaceSmileBeam, faDove } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

const Home = () => {
   return (
    <div className="homepage">
      <h1 className="homepage-header">Portfolio Curation Galleries</h1>
      <h3 className="homepage-description">
         Each of the tiles below will bring you to a gallery of photography by genre. Within each gallery, each image contains a "Like" button. Please click the "Like" button for any images that are portfolio worthy. These images' captions and IDs will be added to a modal container that is hidden by default. <br /> <br />When you like an image, a button will appear on the bottom right of the screen.  <br /> <br />When you are finished reviewing and liking images, please click the button to open the modal. If the list of liked images looks correct, please add your name and the gallery name, then click "send" to send the filenames to my email. <br /> <br /> Thank you for assisting me with my portfolio curation! 
         <FontAwesomeIcon icon={faFaceSmileBeam} />
      </h3>
      <div className="tile-container">
         <div className="tile" id='landscapeTile'>             
            <NavLink to='/landscape' className='tile-link'>
               Landscape Photography
               <FontAwesomeIcon icon={faMountainSun} />
            </NavLink>
         </div>
         <div className="tile" id="natureTile">
            <NavLink to='/nature' className='tile-link'>
               Nature Photography
               <FontAwesomeIcon icon={faSeedling} />
            </NavLink>
         </div>
         <div className="tile" id="petsTile">
            <NavLink to='/pets' className='tile-link'>
               Pet Photography
               <FontAwesomeIcon icon={faPaw} />
            </NavLink>
         </div>
         <div className="tile" id="ruinsTile">
            <NavLink to='/ruins' className='tile-link'>
               Ruins Photography
               <FontAwesomeIcon icon={faHouseCrack} />
            </NavLink>
         </div>
         <div className="birds" id="birdsTile">
            <NavLink to='/birds' className='tile-link'>
               <FontAwesomeIcon icon={faDove} />
            </NavLink>
         </div>
      </div>
    </div>
   );
};

export default Home;