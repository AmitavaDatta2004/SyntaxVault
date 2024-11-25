import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold">Amitava Datta</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/AmitavaDatta2004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/amitava-datta-301920292/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}