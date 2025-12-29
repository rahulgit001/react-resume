const Education = () => {
  return (
    <div className="max-w-5xl mx-auto mt-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">

      {/* Section Title */}
      <h2 className="text-2xl font-bold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900 mb-6 relative">
        Education
        <span className="absolute left-0 -bottom-1 w-14 h-1 rounded-full"></span>
      </h2>

      <div className="space-y-4 text-gray-700">

        {/* B.Tech */}
        <div>
          <h3 className="font-semibold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900">
            Bachelor of Technology (B.Tech) – Computer Science & Engineering
          </h3>
          <p className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-sm">
            Sityog Institute of Technology · 2023
          </p>
          <p className="text-sm [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-medium mt-1">
            CGPA: 7.44 / 10
          </p>
        </div>

        {/* 12th */}
        <div>
          <h3 className="font-semibold [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-gray-900">
            Higher Secondary (12th – Science)
          </h3>
          <p className="text-sm [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)]">
            Bihar School Examination Board (BSEB) · 2018
          </p>
        </div>

        {/* 10th */}
        <div>
          <h3 className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold text-gray-900">
            Secondary (10th – General)
          </h3>
          <p className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-sm">
            Bihar School Examination Board (BSEB) · 2015
          </p>
        </div>

      </div>
    </div>
  );
};

export default Education;
