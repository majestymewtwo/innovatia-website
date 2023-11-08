"use client";
import React from "react";

import "./MemberCard.css";
import { Github, Instagram, Linkedin } from "lucide-react";

function MemberCard(props) {
  const { name, role, image, github, linkedin, instagram } = props;

  return (
    <div className="flex justify-center items-center h-fit w-fit">
      <div className="profile-card">
        <div className="img">
          <img src={image} />
        </div>
        <div className="caption text-white">
          <h3 className="text-bold ">{name}</h3>
          <p className="text-xs">{role}</p>
          <div className="social-links flex flex-row gap-2 justify-center">
          <a href={github} target="_blank">
            <Github color="#FFD099"/>
          </a>
          <a href={linkedin}  target="_blank">            
            <Linkedin color="#FFD099" />
          </a>
          <a href={instagram}  target="_blank">
            <Instagram color="#FFD099" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
