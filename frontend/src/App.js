import React, { useState } from "react";
import CompanyList from "./componets/CompanyList.js";
import FilterControls from "./componets/FilterControls.js";

const App = () => {
  const [filters, setFilters] = useState({});

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4 text-primary fw-bold text-uppercase">
        Company Directory
      </h1>

      <FilterControls onFilter={setFilters} />
      <CompanyList filters={filters} />
    </div>
  );
};

export default App;
