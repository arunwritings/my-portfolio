import { experiences } from "../data/portfolio";
import { SectionHeading } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Experience" />

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gray-700 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="md:pl-16 relative">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-violet-500 ring-4 ring-gray-900" />
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-violet-400 font-medium mt-0.5">
                        {exp.company}
                        <span className="text-gray-500 font-normal"> · {exp.location}</span>
                      </p>
                    </div>
                    <span className="shrink-0 px-3 py-1 bg-gray-700 text-gray-400 text-sm rounded-full self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <svg
                          className="w-4 h-4 text-violet-500 mt-1 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
