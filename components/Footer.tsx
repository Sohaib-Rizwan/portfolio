import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com", Icon: AiFillGithub, label: "GitHub" },
  { href: "https://x.com", Icon: AiOutlineTwitter, label: "X (Twitter)" },
  { href: "https://facebook.com", Icon: AiFillFacebook, label: "Facebook" },
  { href: "https://instagram.com", Icon: AiFillInstagram, label: "Instagram" },
  { href: "https://telegram.org", Icon: FaTelegramPlane, label: "Telegram" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Footer text */}
        <p className="text-center text-sm sm:text-left text-gray-400">
          © 2025 Sohaib. All rights reserved.
        </p>

        {/* Social icons */}
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {socialLinks.map(({ href, Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10"
              >
                <Icon size={22} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
