import { personal } from "../data/portfolio";
import { SectionHeading } from "./About";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading label="Get In Touch" />

        <p className="text-gray-400 text-lg leading-relaxed mt-6 mb-12">
          I'm currently open to new opportunities. Feel free to reach out via
          email or connect with me on any of the platforms below.
        </p>

        {/* Contact details */}
        <div className="space-y-5 mb-12">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-4 group"
          >
            <div className="w-11 h-11 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors shrink-0">
              <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
              <p className="text-gray-300 group-hover:text-violet-400 transition-colors">{personal.email}</p>
            </div>
          </a>

          <a
            href={`tel:${personal.mobile.replace(/\s/g, "")}`}
            className="flex items-center gap-4 group"
          >
            <div className="w-11 h-11 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors shrink-0">
              <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Mobile</p>
              <p className="text-gray-300 group-hover:text-violet-400 transition-colors">{personal.mobile}</p>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
              <p className="text-gray-300">{personal.location}</p>
            </div>
          </div>
        </div>

        {/* Social / profile links */}
        <div className="flex flex-wrap gap-4">
          {personal.links.github && (
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-violet-500 text-gray-300 hover:text-violet-400 rounded-lg text-sm font-medium transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {personal.links.linkedin && (
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-violet-500 text-gray-300 hover:text-violet-400 rounded-lg text-sm font-medium transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          )}
          {personal.links.leetcode && (
            <a
              href={personal.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-violet-500 text-gray-300 hover:text-violet-400 rounded-lg text-sm font-medium transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.102 17.93l-2.697 2.607c-.466.466-1.109.807-1.848.007l-6.546-6.669a5.12 5.12 0 0 1-1.504-3.56 5.12 5.12 0 0 1 1.504-3.56l6.546-6.669c.748-.807 1.37-.467 1.837 0l2.709 2.619c.468.468.435 1.187 0 1.649l-4.382 4.281a.386.386 0 0 0 0 .56l4.382 4.281c.436.462.468 1.18 0 1.649zm3.84-8.56H12.6a.75.75 0 1 0 0 1.5h7.342a.75.75 0 1 0 0-1.5z" />
              </svg>
              LeetCode
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
