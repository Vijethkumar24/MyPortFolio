import React from 'react';
import './Skills.css'
import ReactImg from './assets/imgs/ReactImg.png'
import NodeJsImg from './assets/imgs/NodeJsImg.png'
import AppDevelopmentImg from './assets/imgs/AppDevelopMentImg.png'
import JavaImg from './assets/imgs/JavaImg.png'
import SqlImg from './assets/imgs/SQLImg.png'
import HtmlImg from './assets/imgs/HtmLIgg.png'
import CssImg from './assets/imgs/CssImg.png'
import CImg from './assets/imgs/CImg.png'
import CplusImg from './assets/imgs/C++Img.png'
import JsImg from './assets/imgs/JsImg.png'
function SkillsComponent() {
  return (
    <div className="skills-content">
      <img src={ReactImg} alt="React" className="skillsImage" />
      <img src={NodeJsImg} alt="NodeJs" className="skillsImage" />
      <img src={AppDevelopmentImg} alt="AppDevelopment" className="skillsImage" />
      <img src={JavaImg} alt="Java" className="skillsImage" />
      <img src={SqlImg} alt="Sql" className="skillsImage" />
      <img src={HtmlImg} alt="html" className="skillsImage" />
      <img src={CssImg} alt="Css" className="skillsImage" />
      <img src={CImg} alt="C" className="skillsImage" />
      <img src={CplusImg} alt="C++" className="skillsImage" />
      <img src={JsImg} alt="js" className="skillsImage" />

      {/* Add your skills details here */}
    </div>
  );
}

export default SkillsComponent;
