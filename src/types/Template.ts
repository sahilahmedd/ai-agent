// TemplateContent defines the structure for template text, video, and branding content
export interface TemplateContent {
  id?: string;
  agentCode?: string;
  heading: string;
  subheading: string;
  button1Text?: string;
  button2Text?: string;
  logo?: string; // path to logo image
  videos?: string[]; // paths to video files
  ctaLabel?: string;
  preChatLabel?: string;
  avatarImage?: string; // path to avatar image
  agentAvatar?: string; // path to avatar image
  agentName?: string;
  introVideo1?: string;
  introVideo2?: string;
  companyLogo?: string;
  agentId?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaImage?: string;
}

// TemplateStyles defines the structure for theming and style configuration
export interface TemplateStyles {
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  avatarGlowColor?: string;
  heading?: string;
  subheading?: string;
  bg?: {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
  };
  buttonType?: string;
  agentGlow?: string;
  micGlow?: string;
  overlayBg?: string;
}
