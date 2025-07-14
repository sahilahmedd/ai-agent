import ChatWindow from "./ChatWindow";
import type { TemplateContent, TemplateStyles } from "../types/Template";
import logo from "../assets/logo/amplitech-logo.svg";
import avatar from "../assets/images/Raisa-agent-sara.svg";

const templateContent: TemplateContent = {
  heading: "Amplitech AI Chat",
  subheading: "Let’s turn conversations into conversions!",
  logo,
  videos: [],
  ctaLabel: "Start Chatting",
  preChatLabel: "Let’s chat",
  agentAvatar: avatar,
};

const templateStyles: TemplateStyles = {
  primaryColor: "#5E2CD9",
  secondaryColor: "#F6F7FB",
  backgroundColor: "#F6F7FB",
  buttonColor: "#5E2CD9",
  buttonTextColor: "#fff",
  avatarGlowColor: "#8558F2",
};

export default function ChatPage() {
  return <ChatWindow templateConfig={{ templateContent, templateStyles }} />;
}
