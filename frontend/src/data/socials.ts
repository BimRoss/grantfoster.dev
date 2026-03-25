import type { LucideIcon } from "lucide-react";
import {
  Mail,
  Send,
  MessageCircle,
  Video,
  Camera,
  Music,
  X,
} from "lucide-react";

export type SocialEntry = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socials: SocialEntry[] = [
  { label: "Email", href: "mailto:grantdfoster@gmail.com", icon: Mail },
  { label: "X", href: "https://twitter.com/geeeeeeemoney", icon: X },
  { label: "Telegram", href: "https://t.me/geeeemoney", icon: Send },
  { label: "Discord", href: "https://discordapp.com/users/449222160687300608", icon: MessageCircle },
  { label: "YouTube", href: "https://www.youtube.com/@geeeeemoney", icon: Video },
  { label: "Instagram", href: "https://www.instagram.com/grantdavisfoster/", icon: Camera },
  { label: "SoundCloud", href: "https://on.soundcloud.com/lTt69LlmWrZRAkqvH9", icon: Music },
];
