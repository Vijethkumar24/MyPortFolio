import React, { useState } from 'react';
import './Project.css';
import AstronautImg from './assets/imgs/AstronautChotu.png';
import Pin from './assets/imgs/pin.png' // Adjust the path as needed
import Docimg from './assets/imgs/Document.png'
import Solarimg from './assets/imgs/solar.png'
import Scannerrimg from './assets/imgs/scanner.png'
import Gasimg from './assets/imgs/gas.png'
import Panchimg from './assets/imgs/Panchayath.png'
import PortFolioimg from './assets/imgs/PortFolio.png'
 

function ProjectsComponent() {
  const projects = [
    {
      title: 'Counterfeit Detection Of Documents Using BlockChain',
      description: 'Developed a decentralized, immutable blockchain-based system to detect fake documents using Ethereum smart contracts, ensuring the authenticity & integrity.',
      imgsrc :Docimg
    },
    {
      title: 'TextScanner App',
      description: 'This App allows users to easily extract text from a variety of photos and PDFs, allowing them to access the content whenever it\'s convenient for them.',
      imgsrc :Scannerrimg
    },
    {
      title: 'Solar Edge Ecommerce-App',
      description: 'The App provides a simplified online shopping experience for solar items, allowing users to browse and buy solar panels, inverters, and related equipment in one convenient location.',
      imgsrc :Solarimg 
    },
    {
      title: 'HarGhar Gas',
      description: 'Through the online platform HarGhar Gas, customers can easily reserve LPG gas cylinders from leading providers like Indane, Bharat Gas, and HP Gas.',
      imgsrc :Gasimg
    },
    {
      title: 'Apna Panchayath',
      description: 'Here people can actively participate by posting their issues and peruse succinct summaries of local panchayats.',
      imgsrc :Panchimg
    },
    {
      title: 'Portfolio Website',
      description: 'This is my website, which provides visitors with a glimpse into my professional identity. Designed to showcase my talents, experience, and adventure.',
      imgsrc :PortFolioimg
    }
  ];

  const [astronautPosition, setastronautPosition] = useState({ top: '0%', left: '0%' });
  const [pinPosition, setPinPosition] = useState({ top: '0%', left: '0%' });

  const handleProjectHover = (event) => {
    const { top, left, width, height } = event.currentTarget.getBoundingClientRect();
    setastronautPosition({ top: `${top + window.scrollY + height /2+40}px`, left: `${left + window.scrollX + width-40}px` });
    setPinPosition({ top: `${top + window.scrollY + height / 2}px`, left: `${left + window.scrollX - 10}px` });
  };

  return (
    <div className="projects-content">
      <div
        className="astronaut"
        style={{ top: astronautPosition.top, left: astronautPosition.left }}
      >
        <img src={AstronautImg} alt="Rocket" />
      </div>
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card"
          onMouseEnter={handleProjectHover}
        >
            <img src={Pin} alt="Pin" className="pin" />
            <img src={project.imgsrc} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
         
        </div>
      ))}
    </div>
  );
}

export default ProjectsComponent;
