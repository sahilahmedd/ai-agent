// TemplateContent defines the structure for template text, video, and branding content
export interface TemplateContent {
  heading: string;
  subheading: string;
  logo: string; // path to logo image
  videos: string[]; // paths to video files
  ctaLabel: string;
  preChatLabel: string;
  agentAvatar: string; // path to avatar image
}

// TemplateStyles defines the structure for theming and style configuration
export interface TemplateStyles {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  buttonColor: string;
  buttonTextColor: string;
  avatarGlowColor: string;
}
