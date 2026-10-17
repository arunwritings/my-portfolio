import { skills } from "../data/portfolio";
import { SectionHeading } from "./About";

const categoryColors: Record<string, string> = {
  "Languages & Frameworks": "bg-violet-500/10 text-violet-300 border-violet-500/30",
  "Architecture & Resilience": "bg-blue-500/10 text-blue-300 border-blue-500/30",
  "Cloud & Messaging": "bg-sky-500/10 text-sky-300 border-sky-500/30",
  "Databases": "bg-amber-500/10 text-amber-300 border-amber-500/30",
  "DevOps & CI/CD": "bg-rose-500/10 text-rose-300 border-rose-500/30",
  "Testing & Observability": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  "AI & Other Tools": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
};

const defaultColor = "bg-gray-500/10 text-gray-300 border-gray-500/30";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {Object.entries(skills).map(([category, items]) => {
            const colorClass = categoryColors[category] ?? defaultColor;
            return (
              <div
                key={category}
                className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${colorClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
