import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto mt-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">

      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] mb-6 relative">
        Projects
        <span className="absolute left-0 -bottom-1 w-14 h-1 rounded-full"></span>
      </h2>

      <div className="space-y-4 text-gray-700">

        {/* GitHub */}
        <div className="flex items-start gap-3">
          <FaGithub className="text-gray-900 mt-1" />
          <div>
            <h3 className="font-semibold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900">GitHub Profile</h3>
            <p className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-sm">
              Public repositories showcasing React.js, JavaScript, and UI-focused projects.
            </p>
            <a
              href="https://github.com/rahulgit001/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] gap-1 text-blue-600 hover:underline mt-1"
            >
              github.com/rahulgit001 <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>

        {/* Portfolio */}
        <div className="flex items-start gap-3">
          <FaExternalLinkAlt className="text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900">Personal Portfolio</h3>
            <p className="text-sm [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">
              Responsive portfolio website showcasing skills, experience, and projects.
            </p>
            <a
              href="https://rahulgit001.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] gap-1 text-blue-600 hover:underline mt-1"
            >
              View Portfolio <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>

        {/* Cashygo */}
        <div className="flex items-start gap-3">
          <FaExternalLinkAlt className="text-green-600 mt-1" />
          <div>
            <h3 className="font-semibold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900">Cashygo – E-commerce Website</h3>
            <p className="text-sm [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">
              Live production e-commerce platform with responsive UI and optimized performance.
            </p>
            <a
              href="https://cashygo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] items-center gap-1 text-blue-600 hover:underline mt-1"
            >
              cashygo.in <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Projects;
