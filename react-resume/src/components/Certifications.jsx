const Certifications = () => {
  return (
    <div className="max-w-5xl mx-auto mt-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">

      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] relative">
        Certifications & Training
        <span className="absolute left-0 -bottom-1 w-20 h-1 rounded-full"></span>
      </h2>

      <div className="space-y-4 text-gray-700">

        {/* Certification 1 */}
        <div>
          <h3 className="font-semibold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900">
            Web Development Internship
          </h3>
          <p className="text-sm [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">
            JSS InfyTech · Dec 2023 – Feb 2024
          </p>
        </div>

        {/* Certification 2 */}
        <div>
          <h3 className="font-semibold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900">
            Certified Web Development
          </h3>
          <p className="text-sm [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">
            Internshala
          </p>
        </div>

        {/* Certification 3 */}
        <div>
          <h3 className="font-semibold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900">
            Computer Hardware Training
          </h3>
          <p className="text-sm [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">
            LearnVern (TOPS Technologies)
          </p>
        </div>

      </div>
    </div>
  );
};

export default Certifications;
