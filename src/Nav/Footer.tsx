import { Linkedin, Github , Mail  } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-2 border-neutral-700 py-10 text-center">
      {/* Top Section: Social Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://github.com/Johnybhiduri" target="_blank" rel="noopener noreferrer" aria-label="Github">
          <Github className="w-6 h-6 hover:text-blue-500" />
        </a>
        <a href="https://www.linkedin.com/in/jainendra-bhiduri-245054220/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-6 h-6 hover:text-blue-500" />
        </a>
        <a href="mailto:johnybhiduri8955@gmail.com" aria-label="Email">
          <Mail className="w-6 h-6 hover:text-blue-500" />
        </a>
      </div>

      {/* Middle Section: Links */}
      <div className="space-y-2">
        <ul className="flex justify-center space-x-6 text-sm text-gray-400">
          <li>
            <a href="#" className="hover:text-white">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">Features</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">Terms</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">Privacy Policy</a>
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
