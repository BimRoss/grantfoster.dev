import type { ReactElement, SVGProps } from "react";
import {
  DiscordIcon,
  EmailIcon,
  PhoneIcon,
  TelegramIcon,
  TwitterXIcon,
  YouTubeIcon,
} from "./socialIcons";

export type SocialIcon = (props: SVGProps<SVGSVGElement>) => ReactElement;

export type SocialEntry =
  | { label: string; href: string; icon: SocialIcon }
  | { label: string; action: "call"; icon: SocialIcon };

export const socials: SocialEntry[] = [
  { label: "X", href: "https://twitter.com/geeeeeeemoney", icon: TwitterXIcon },
  { label: "Telegram", href: "https://t.me/geeeemoney", icon: TelegramIcon },
  {
    label: "Discord",
    href: "https://discordapp.com/users/449222160687300608",
    icon: DiscordIcon,
  },
  { label: "YouTube", href: "https://www.youtube.com/@geeeeemoney", icon: YouTubeIcon },
  {
    label: "Email",
    href: "mailto:grantdfoster@gmail.com",
    icon: EmailIcon,
  },
  {
    label: "Call us",
    action: "call",
    icon: PhoneIcon,
  },
];
