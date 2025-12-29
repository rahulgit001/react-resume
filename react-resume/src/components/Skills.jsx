const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto mt-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] mb-5 relative">
        Technical Skills
        <span className="absolute left-0 -bottom-1 w-14 h-1 rounded-full"></span>
      </h2>

      {/* Skills Groups */}
      <div className="space-y-4 text-gray-700">

        {/* Frontend */}
        <div>
          <h3 className="font-semibold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900 mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React.js",
              "JavaScript (ES6+)",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Bootstrap",
              "tailwindcss",
              "jQuery",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-blue-50 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-blue-700 rounded-full border border-blue-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="font-semibold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900 mb-2">Backend & APIs</h3>
          <div className="flex flex-wrap gap-2">
            {["REST API Integration", "Basic Python"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] bg-green-50 text-green-700 rounded-full border border-green-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <h3 className="font-semibold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900 mb-2">Database</h3>
          <div className="flex flex-wrap gap-2">
            {["MySQL"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-sm bg-purple-50 text-purple-700 rounded-full border border-purple-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
