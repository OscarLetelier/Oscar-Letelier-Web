import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { type IconType } from "react-icons";

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  isEmail: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/OscarLetelier",
    icon: FaGithub,
    isEmail: false,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/oscar-letelier-molina-6a9216140/",
    icon: FaLinkedin,
    isEmail: false,
  },
  {
    name: "Email",
    url: "mailto:oscar.letelier@outlook.com",
    icon: FaEnvelope,
    isEmail: true,
  },
];
