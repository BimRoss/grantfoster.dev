import type { LucideIcon } from "lucide-react";
import {
  Mail,
  Send,
  MessageCircle,
  Video,
  Camera,
  Music,
  X,
  createLucideIcon,
} from "lucide-react";

/** Lucide’s npm build omits `Linkedin`; use the same paths as lucide.dev. */
const Linkedin = createLucideIcon("linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "linkedin-profile",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "linkedin-m" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "linkedin-dot" }],
]);

export type SocialEntry = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socials: SocialEntry[] = [
  { label: "Email", href: "mailto:grantdfoster@gmail.com", icon: Mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/grantdfoster",
    icon: Linkedin,
  },
  { label: "Twitter", href: "https://twitter.com/geeeeeeemoney", icon: X },
  { label: "Telegram", href: "https://t.me/geeeemoney", icon: Send },
  { label: "Discord", href: "https://discordapp.com/users/449222160687300608", icon: MessageCircle },
  { label: "YouTube", href: "https://www.youtube.com/@geeeeemoney", icon: Video },
  { label: "Instagram", href: "https://www.instagram.com/grantdavisfoster/", icon: Camera },
  { label: "SoundCloud", href: "https://on.soundcloud.com/lTt69LlmWrZRAkqvH9", icon: Music },
];
