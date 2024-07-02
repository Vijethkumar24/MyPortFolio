import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import AstronautImg from "./assets/imgs/Astronaut.png";
import Media from "./assets/audio/Tony.mp3";
import NavBar from "./NavBar.jsx";
import ProjectsComponent from "./ProjectsComponent.jsx";
import AchievementsComponent from "./AchievementComponent.jsx";
import SkillsComponent from "./SkillsComponent.jsx";
import ContactComponent from "./ContactComponent.jsx";
import ProfileImg from "./assets/imgs/profile_pic.png";
function HomeComponent() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("home");

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.muted = false;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "projects":
        return <ProjectsComponent />;
      case "achievements":
        return <AchievementsComponent />;
      case "skills":
        return <SkillsComponent />;
      case "contact":
        return <ContactComponent />;
      default:
        return (
          <div className="main-content">
            <div className="text-content">
              <div className="oval-bg">
                <img src={ProfileImg} alt="ProfileImg" className="ProfileImg" />
              </div>
              <h1>Hello I'M VIJETH KUMAR</h1>
              <p>
                Student At AJ Institute Of Engineering And Technology, Mangalore
              </p>
              <p>
                I am a driven and committed CSE Engineering student at the AJ
                Institute of Engineering and Technology, ready to put my skills
                and knowledge to work on exciting opportunities. Whether coming
                up with original ideas, dealing with practical issues, or taking
                on novel challenges, I'm sure I can have a good impact.
              </p>
            </div>
            <div className="image-content">
              <img src={AstronautImg} alt="Astronaut" className="astronaut" />
            </div>
            <button className="play-audio-button" onClick={toggleAudio}>
              {isPlaying ? "Stop Audio" : "Play Audio"}
            </button>
          </div>
        );
    }
  };

  return (
    <div>
      <NavBar setCurrentComponent={setCurrentComponent} />
      {renderComponent()}
      <div className="Audio" style={{ display: "none" }}>
        <audio ref={audioRef} loop>
          <source src={Media} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default HomeComponent;
