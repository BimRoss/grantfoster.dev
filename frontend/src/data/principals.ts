import type { SocialIcon } from "./socials";
import { EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon } from "./socialIcons";

export type ContactHandle = {
  href: string;
  label: string;
  Icon: SocialIcon;
  external: boolean;
};

export type Principal = {
  id: string;
  name: string;
  role: string;
  initials: string;
  handles: ContactHandle[];
};

export const principals: Principal[] = [
  {
    id: "grant",
    name: "Grant Foster",
    role: "Principal Product Engineer",
    initials: "GF",
    handles: [
      { href: "https://linkedin.com/in/grantdfoster", label: "linkedin.com/in/grantdfoster", Icon: LinkedInIcon, external: true },
      { href: "https://github.com/grantfosterdev", label: "github.com/grantfosterdev", Icon: GitHubIcon, external: true },
      { href: "mailto:grantdfoster@gmail.com", label: "grantdfoster@gmail.com", Icon: EmailIcon, external: false },
      { href: "tel:+13144025801", label: "(314) 402-5801", Icon: PhoneIcon, external: false },
    ],
  },
  {
    id: "ross",
    name: "Ross",
    role: "Agent — Head of Automation",
    initials: "R",
    handles: [
      { href: "https://github.com/ross-makeacompany", label: "github.com/ross-makeacompany", Icon: GitHubIcon, external: true },
      { href: "mailto:ross@bimross.com", label: "ross@bimross.com", Icon: EmailIcon, external: false },
    ],
  },
];

export const grant = principals[0];
export const ross = principals[1];
