import { GiFlyingShuriken, GiRibbonMedal, GiMuscleUp } from "react-icons/gi";

import { GiGymBag, GiPodiumWinner, GiTeacher } from "react-icons/gi";

export const Services = [
  {
    title: "Recreational Gymnastics",
    icon: <GiGymBag />,
    description:
      "Fun and engaging classes for beginners to learn the fundamentals of gymnastics, promoting physical fitness and coordination.",
    features: ["Basic Skills Development", "Flexibility Training", "Safe Environment"],
  },
  {
    title: "Competitive Team Training",
    icon: <GiPodiumWinner />,
    description:
      "Advanced coaching for gymnasts aiming to compete at regional and national levels, focusing on technique and performance.",
    features: ["Elite Coaching", "Routine Choreography", "Competition Preparation"],
  },
  {
    title: "Private Coaching Sessions",
    icon: <GiTeacher />,
    description:
      "Personalized one-on-one sessions to target specific skills and accelerate progress in a focused setting.",
    features: ["Customized Training Plans", "Individual Attention", "Flexible Scheduling"],
  },
];


import { IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

export  const Info = [
    {name:"Address", content:'Anniston, AL, United States', icon:<IoLocationOutline/>},
    {name:"Status", content:'Open 8 am ⋅ Closes 7 pm', icon:<FiClock/>},
    {name:"Phone", content:'+1 256-236-4809', icon:<FiPhone/>},
  ]
