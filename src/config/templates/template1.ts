import type { TemplateContent, TemplateStyles } from "../../types/Template";

import IntroVideo1 from "../../assets/videos/Raisa-Intro-video-1.mp4";
import IntroVideo2 from "../../assets/videos/Raisa-Intro-video-2.mp4";
import AgentAvatar from "../../assets/images/Raisa-agent-sara.svg";
import companyLogo from "../../assets/logo/amplitech-logo.svg";
import BgImage from "../../assets/images/bg-C5n0vwCm.png";

export const templateContent: TemplateContent = {
  id: "1",
  agentCode: "raisa",
  heading: "Boost Your Marketing Conversions with Your Own Voice Sales Agent",
  subheading:
    "Turn clicks and scans into real customer actions with a personalized AI sales agent — built in minutes, no coding needed.",
  button1Text: "Start Building – Talk to me",
  button2Text: "Let's chat",
  avatarImage: AgentAvatar,
  agentName: "raisa",
  introVideo1: IntroVideo1,
  introVideo2: IntroVideo2,
  companyLogo: companyLogo,
  agentId: "Z8M7sfAEjv3TSMsdDXe1",
  metaTitle: "Amplitech - Your AI Sidekick",
  metaDescription: "Meet Your AI Sidekick: Turning Clicks into Clients, 24/7",
  metaImage:
    "https://res.cloudinary.com/dxyh3npno/image/upload/v1746117239/agent-raisa_z35cbj.png",
};

export const templateStyles: TemplateStyles = {
  heading:
    "bg-gradient-to-r from-white to-[#CDB8FE] text-transparent bg-clip-text",
  subheading: "text-[#F6F7FB]",
  bg: {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  buttonType: "AnimatedButton",
  agentGlow: "animate-pink-shadow",
  micGlow: "animate-glow",
  overlayBg: "bg-black",
};

export const template1Config = {
  templateContent,
  templateStyles,
};
