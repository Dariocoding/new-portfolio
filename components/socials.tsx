import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

type Props = {
  containerStyles?: string;
  iconStyles?: string;
};

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Dariocoding",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dar%C3%ADo-flores/",
    icon: <FaLinkedin />,
  },
];

export default function Socials({ containerStyles, iconStyles }: Props) {
  return (
    <div className={cn(containerStyles)}>
      {socials.map((social) => (
        <Link
          target="_blank"
          href={social.url}
          key={social.name}
          className={cn(iconStyles)}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
