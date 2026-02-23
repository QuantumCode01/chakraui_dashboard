import React, { useState } from "react";
import ProfileHeader from "../Components/ProfileHeader";
import { MdFacebook } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import coverImage from "../assets/images/Background.svg"
import profileImage from "../assets/images/profileimage.svg"
import OverviewTabs from "../Components/OverviewTabs";
import PlatformSettings from "../Components/PlatformSettings";
import ProfileInfo from "../Components/ProfileInfo";
import ProjectsSection from "../Components/ProjectsSection.jsx";

export default function Profile() {
 

  const profileData = {
    about:"Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
    full_name: "Alec Thompson",
    mobile: "(44) 123 1234 123",
    email: "alecthompson@mail.com",
    location: "United States",
     social_media: [
    { icon: MdFacebook, link: "#" },
    { icon: IoLogoTwitter, link: "#" },
    { icon: IoLogoInstagram, link: "#" },
  ],


  };


  const projectsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      title: "Modern",
      description:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      title: "Scandinavian",
      description:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      title: "Minimalist",
      description:
        "Different people have different taste, and various types of music.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <ProfileHeader
        coverImage={coverImage}
        avatar={profileImage}
        name="Esthera Jackson"
        email="esthera@simmmple.com"
      />


      <div className="grid md:grid-cols-3 gap-6 px-6 mt-6">
        <PlatformSettings  />
        <ProfileInfo data={profileData} />
      </div>

      <ProjectsSection projects={projectsData} />
    </div>
  );
}
