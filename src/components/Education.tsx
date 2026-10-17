import { education } from "../data/portfolio";
import { SectionHeading } from "./About";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Education" />

        <div className="mt-12 space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-white font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-violet-400 text-sm mt-0.5">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.location}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="px-3 py-1 bg-gray-700 text-gray-400 text-sm rounded-full block">{edu.period}</span>
                  <span className="text-emerald-400 text-sm mt-2 block font-medium">{edu.grade}</span>
                </div>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="space-y-1 mt-4">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
