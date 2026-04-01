import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface ContactLink {
  label: string;
  href: string;
  icon: IconType;
  value: string;
}

export interface ContactData {
  title: string;
  subtitle: string;
  links: ContactLink[];
}

export const contactData: ContactData = {
  title: "Hablemos",
  subtitle:
    "¿Tienes un proyecto en mente o quieres colaborar? Escríbeme y te respondo a la brevedad.",
  links: [
    {
      label: "Email",
      href: "mailto:oscar.letelier.m@gmail.com",
      icon: FaEnvelope,
      value: "oscar.letelier.m@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/oscarletelier",
      icon: FaLinkedin,
      value: "linkedin.com/in/oscarletelier",
    },
    {
      label: "GitHub",
      href: "https://github.com/OscarLetelier",
      icon: FaGithub,
      value: "github.com/OscarLetelier",
    },
  ],
};
