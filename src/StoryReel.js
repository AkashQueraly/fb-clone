import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import aviLogo from "./images/aviLogo.png";
import aviStory from "./images/aviStory.jpg";
import akashLogo from "./images/akashLogo.jpeg";
import akashStory from "./images/akashStory.jpg";
import harryLogo from "./images/harryLogo.jpg";
import harryStory from "./images/harryStory.jpg";
import sakLogo from "./images/sakLogo.png";
import sakStory from "./images/sakStory.jpg";
import ayushLogo from "./images/ayushLogo.jpg";
import ayushStory from "./images/ayushStory.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={akashStory} profileSrc={akashLogo} title="Akash Queraly" />
      <Story image={sakStory} profileSrc={sakLogo} title="Saksham Jaiswal" />
      <Story image={ayushStory} profileSrc={ayushLogo} title="Ayush Jindal" />
      <Story image={aviStory} profileSrc={aviLogo} title="Aviroop Poddar" />
      <Story image={harryStory} profileSrc={harryLogo} title="Harry Bhai" />
      
    </div>
  );
}

export default StoryReel;