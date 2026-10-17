import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {personal.name}. Built with React + Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          {personal.links.github && (
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-violet-400 transition-colors text-sm"
            >
              GitHub
            </a>
          )}
          {personal.links.linkedin && (
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-violet-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
          )}
          <a
            href={`mailto:${personal.email}`}
            className="text-gray-600 hover:text-violet-400 transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
