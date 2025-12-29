const Summary = () => {
  return (
    <div className="max-w-5xl mx-auto mt-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] relative">
        Professional Summary
        <span className="absolute left-0 -bottom-1 w-16 h-1 rounded-full"></span>
      </h2>

      {/* Summary Content */}
      <div className="space-y-3 text-gray-700 leading-relaxed text-base">

        <p>
          Frontend/UI Developer with <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold">1.11+ years of hands-on experience</span> in
          building <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold">responsive, high-performance web applications</span> using
          <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold"> React.js, JavaScript (ES6+)</span>, and modern UI frameworks.
        </p>

        <p>
          Proficient in developing <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold">scalable, accessible, and cross-browser compatible</span>
          interfaces using <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold">Tailwind CSS, HTML5, CSS3, Bootstrap</span> and
          component-based architecture.
        </p>

        <p>
          Experienced in <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold">RESTful API integration</span>, 
          <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold"> Agile methodologies</span>, and
          <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold"> Git-based version control workflows</span>.
        </p>

        <p>
          Solved <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold">100+ DSA problems on LeetCode</span>, strengthening
          problem-solving and logical thinking abilities.
        </p>

        <p>
          A <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold">collaborative team player</span> with strong
          <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold"> debugging skills</span> and a continuous learning mindset.
        </p>

      </div>

    </div>
  );
};

export default Summary;
