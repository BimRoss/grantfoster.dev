import type { ReactElement, SVGProps } from "react";
import {
  DiscordIcon,
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  SoundCloudIcon,
  TelegramIcon,
  TwitterXIcon,
  YouTubeIcon,
} from "./socialIcons";

export type SocialIcon = (props: SVGProps<SVGSVGElement>) => ReactElement;

export type SocialEntry =
  | { label: string; href: string; icon: SocialIcon }
  | { label: string; action: "call"; icon: SocialIcon };

export const socials: SocialEntry[] = [
  { label: "GitHub", href: "https://github.com/geeeeemoney", icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/grantdfoster/",
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:grantdfoster@gmail.com",
    icon: EmailIcon,
  },
  {
    label: "Call",
    action: "call",
    icon: PhoneIcon,
  },
];
