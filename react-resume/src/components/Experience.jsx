const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto mt-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">

      {/* Section Title */}
      <h2 className="text-2xl [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-bold text-gray-900 mb-6 relative">
        Experience
        <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] absolute left-0 -bottom-1 w-14 h-1 rounded-full"></span>
      </h2>

      {/* Company */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h3 className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-lg font-semibold text-gray-900">
            RiditStack Pvt. Ltd.
            <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-blue-600"> — Junior UI Developer</span>
          </h3>
          <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-sm text-gray-500">Mar 2024 – Present</span>
        </div>

        <ul className="mt-3 [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] list-disc list-inside text-gray-700 space-y-1">
          <li>Built schema-driven dynamic forms and tables using React.js and TypeScript.</li>
          <li>Developed reusable UI components with React Hook Form for dynamic rendering.</li>
          <li>Implemented validation rules based on schema metadata.</li>
          <li>Integrated RESTful APIs for CRUD operations and dynamic data workflows.</li>
          <li>Worked in Agile teams using Git, pull requests, and code reviews.</li>
        </ul>
      </div>

      {/* Project */}
      <div>
        <h4 className="text-md [text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] font-semibold text-gray-900 mb-2">
          Project: <span className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] text-blue-600">Tata Aerobridge</span>
        </h4>

        <ul className="[text-shadow:2px_2px_6px_rgba(0,0,0,0.25)] list-disc list-inside text-gray-700 space-y-1">
          <li>Developed Vendor Onboarding Portal for registration and approval workflows.</li>
          <li>Implemented role-based and conditional form logic using schema-driven architecture.</li>
          <li>Designed reusable UI components and integrated secure REST APIs.</li>
          <li>Ensured data accuracy, responsiveness, and cross-browser compatibility.</li>
        </ul>
      </div>

    </div>
  );
};

export default Experience;
