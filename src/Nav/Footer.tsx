import { Linkedin, Github , Mail  } from 'lucide-react';
import { useNavigate } from "react-router-dom";
interface FooterProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    sections: {
      homeRef: React.RefObject<HTMLDivElement>;
      featuresRef: React.RefObject<HTMLDivElement>;
      aboutRef: React.RefObject<HTMLDivElement>;
      contactRef: React.RefObject<HTMLDivElement>;
    };
  }

export const Footer: React.FC<FooterProps> = ({ scrollToSection, sections }) => {
  const navigate = useNavigate();
  return (
    <footer className="mt-2 border-neutral-700 pt-10 text-center">
      {/* Top Section: Social Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://github.com/Johnybhiduri" target="_blank" rel="noopener noreferrer" aria-label="Github">
          <Github className="w-6 h-6 hover:text-orange-700" />
        </a>
        <a href="https://www.linkedin.com/in/jainendra-bhiduri-245054220/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-6 h-6 hover:text-orange-700" />
        </a>
        <a href="mailto:johnybhiduri8955@gmail.com" aria-label="Email">
          <Mail className="w-6 h-6 hover:text-orange-700" />
        </a>
      </div>

      {/* Middle Section: Links */}
      <div className="space-y-2">
        <ul className="flex justify-center space-x-6 text-sm text-gray-400">
          <li>
            <button onClick={() => scrollToSection(sections.homeRef)} className="hover:text-white">Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(sections.featuresRef)} className="hover:text-white">Features</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(sections.aboutRef)} className="hover:text-white">About</button>
          </li>
          <li>
            <button   onClick={() => navigate("/terms")} className="hover:text-white">Terms</button>
          </li>
          <li>
            <button  className="hover:text-white">Privacy Policy</button>
          </li>
        </ul>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-6 text-sm text-gray-500">
        Johny Bhiduri @ 2025
      </div>
    </footer>
  )
}
