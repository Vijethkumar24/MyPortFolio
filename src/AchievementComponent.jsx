import React, { useState,useRef} from 'react';
import './Achievement.css';
import TrophyImg from './assets/imgs/trophy.png'; // Adjust the path as needed
import PinImg from './assets/imgs/pin.png'; // Adjust the path as needed

// Import all achievement images
import TechProImg from './assets/imgs/tech.png';
import HacktoberfestImg from './assets/imgs/hacker.png';
import IdeathonImg from './assets/imgs/idea.png';
import ShristiImg from './assets/imgs/enterpreneur.png';
import AKAARImg from './assets/imgs/gaming.png';
import LeaderImg from './assets/imgs/Leader.png';

function AchievementsComponent() {
  const achievements = [
    {
      title: 'Winners of "Tech-Pro: Best College Project"',
      description: 'Developed an innovative platform to showcase and recognize exceptional college projects, leading to increased visibility and engagement for student work.',
      imgsrc: TechProImg
    },
    {
      title: 'Excitedly participated in Hacktoberfest',
      description: 'This involves contributing to open-source projects and collaborating with developers.',
      imgsrc: HacktoberfestImg
    },
    {
      title: 'Passionately engaged in "Ideathon" an state-level competition',
      description: 'This involves showcasing my creativity and problem-solving skills to tackle real-world challenges.',
      imgsrc: IdeathonImg
    },
    {
      title: 'Confidently contributed to the Idea Business Pitch event "Shristi"',
      description: 'This event was conducted by VTU, presenting my entrepreneurial vision and passion for innovation.',
      imgsrc: ShristiImg
    },
    {
      title: 'Gaming lead for AJIET college fest "AKAAR"',
      description: 'This involved planning and supervising a range of gaming competitions and events to make sure that attendees had a fun and exciting time.',
      imgsrc: LeaderImg
    },
    {
        title: 'Event coordinator of BGMI and Valorant for college fest',
        description: 'This involved planning and supervising a range of gaming competitions and events to make sure that attendees had a fun.',
        imgsrc: AKAARImg
      }
  ];

  const [trophyPosition, setTrophyPosition] = useState({ top: '0%', left: '0%' });
  const [pinPosition, setPinPosition] = useState({ top: '0%', left: '0%' });
  const trophyImageRef = useRef(null);

  const handleAchievementHover = (event) => {
    trophyImageRef.current.style.display = 'block';
    const { top, left, width, height } = event.currentTarget.getBoundingClientRect();
    setTrophyPosition({ top: `${top + window.scrollY + height / 2 + 5}px`, left: `${left + window.scrollX + width - 40}px` });
    setPinPosition({ top: `${top + window.scrollY + height / 2}px`, left: `${left + window.scrollX - 10}px` });
  };

  return (
    <div className="achievements-content">
      <div
        className="trophy"
        style={{ top: trophyPosition.top, left: trophyPosition.left }}
      >
        <img ref={trophyImageRef} src={TrophyImg} alt="trophy" className='trophy'  style={{
                    display: 'none',
                    position: 'absolute',
                }} />
      </div>
      <div
        className="pin"
        style={{ top: pinPosition.top, left: pinPosition.left }}
      >
      </div>
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="achievement-card"
          onMouseEnter={handleAchievementHover}
        >
          <img src={PinImg} alt="Pin" className="pin" />
          <img src={achievement.imgsrc} alt={achievement.title} className="achievement-image" />
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AchievementsComponent;
