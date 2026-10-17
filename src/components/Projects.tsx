import { projects } from "../data/portfolio";
import { SectionHeading } from "./About";

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Projects" />

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {featured.map((project) => (
            <div
              key={project.title}
              className="group bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/5 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <div className="flex items-center gap-3">
                  {"period" in project && project.period && (
                    <span className="px-2 py-0.5 bg-gray-700 text-gray-400 text-xs rounded-full font-mono">
                      {project.period}
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repository"
                      className="text-gray-500 hover:text-violet-400 transition-colors"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="text-gray-500 hover:text-violet-400 transition-colors"
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-gray-700/60 text-gray-400 text-xs rounded font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-gray-300 mt-14 mb-6">Other Noteworthy Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {other.map((project) => (
                <div
                  key={project.title}
                  className="group bg-gray-800/30 border border-gray-700 rounded-xl p-5 hover:border-gray-600 transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                          className="text-gray-500 hover:text-violet-400 transition-colors"
                        >
                          <GitHubIcon />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live link"
                          className="text-gray-500 hover:text-violet-400 transition-colors"
                        >
                          <ExternalLinkIcon />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-base font-semibold text-white mb-1 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-gray-500 text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
