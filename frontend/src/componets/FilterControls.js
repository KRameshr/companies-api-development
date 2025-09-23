import React, { useState } from "react";

const FilterControls = ({ onFilter }) => {
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [tech, setTech] = useState("");

  const handleApply = () => {
    const filters = {};
    if (industry) filters.industry = industry.trim();
    if (location) filters.location = location.trim();
    if (tech) filters.tech = tech.trim();

    onFilter(filters);

    // Clear inputs after search
    setIndustry("");
    setLocation("");
    setTech("");
  };

  return (
    <div className="mb-4 d-flex flex-column flex-md-row justify-content-center gap-2">
      {/* Industry input with suggestions */}
      <input
        className="form-control w-100 w-md-auto"
        placeholder="Industry"
        list="industry-options"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      />
      <datalist id="industry-options">
        <option value="Software" />
        <option value="Media" />
        <option value="AI" />
        <option value="Data" />
        <option value="Finance" />
        <option value="Healthcare" />
        <option value="Energy" />
        <option value="Security" />
        <option value="Construction" />
        <option value="Logistics" />
      </datalist>

      {/* Location input with suggestions */}
      <input
        className="form-control w-100 w-md-auto"
        placeholder="Location"
        list="location-options"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <datalist id="location-options">
        <option value="Bengaluru" />
        <option value="Hyderabad" />
        <option value="Chennai" />
        <option value="Pune" />
        <option value="Mumbai" />
        <option value="Kolkata" />
      </datalist>

      {/* Tech stack input with suggestions */}
      <input
        className="form-control w-100 w-md-auto"
        placeholder="Tech"
        list="tech-options"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
      />
      <datalist id="tech-options">
        <option value="React" />
        <option value="Node.js" />
        <option value="MongoDB" />
        <option value="Express" />
        <option value="Python" />
        <option value="Django" />
        <option value="Angular" />
        <option value="Vue.js" />
        <option value="SQL" />
        <option value="AWS" />
        <option value="TensorFlow" />
      </datalist>

      {/* Search button */}
      <button className="btn btn-success w-100 w-md-auto" onClick={handleApply}>
        Search
      </button>
    </div>
  );
};

export default FilterControls;
