import { personal } from "../data/portfolio";

const details = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: "Name",
    value: personal.name,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Mobile",
    value: personal.mobile,
    href: `tel:${personal.mobile.replace(/\s/g, "")}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: personal.location,
  },
];

const linkItems = [
  {
    label: "GitHub",
    href: personal.links.github,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: personal.links.linkedin,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: personal.links.leetcode,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.102 17.93l-2.697 2.607c-.466.466-1.109.807-1.848.007l-6.546-6.669a5.12 5.12 0 0 1-1.504-3.56 5.12 5.12 0 0 1 1.504-3.56l6.546-6.669c.748-.807 1.37-.467 1.837 0l2.709 2.619c.468.468.435 1.187 0 1.649l-4.382 4.281a.386.386 0 0 0 0 .56l4.382 4.281c.436.462.468 1.18 0 1.649zm3.84-8.56H12.6a.75.75 0 1 0 0 1.5h7.342a.75.75 0 1 0 0-1.5z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
          {/* Summary */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Software Engineer based in {personal.location}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {personal.summary}
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not writing code, you'll find me exploring new
              technologies, contributing to open source, or sharing what I learn
              with the developer community.
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-8">
              {linkItems.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-violet-500 text-gray-300 hover:text-violet-400 rounded-lg text-sm transition-all duration-200"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ) : null
              )}
            </div>
          </div>

          {/* Details card */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-white mb-6">Personal Details</h4>
            <ul className="space-y-4">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="text-violet-400 mt-0.5 shrink-0">{d.icon}</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-gray-300 hover:text-violet-400 transition-colors"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <a
                href={personal.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-violet-400 font-mono text-sm">{"</>"}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{label}</h2>
      <div className="flex-1 h-px bg-gray-800 max-w-xs" />
    </div>
  );
}
