import React, { useEffect, useState } from "react";
import axios from "axios";

const CompanyList = ({ filters }) => {
  const [companies, setCompanies] = useState([]);
  const [warning, setWarning] = useState("");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const query = new URLSearchParams(filters).toString();
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/companies?${query}`
        );

        if (res.data.length === 0) {
          setWarning("No companies found matching your search.");
        } else {
          setWarning("");
        }

        setCompanies(res.data);
      } catch (err) {
        console.error(err);
        setWarning("Error fetching data.");
      }
    };

    fetchCompanies();
  }, [filters]);

  return (
    <div>
      {warning && (
        <div className="alert alert-warning text-center">{warning}</div>
      )}

      {/* Table for medium and larger screens */}
      <div className="table-responsive d-none d-md-block">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Company</th>
              <th>Industry</th>
              <th>Location</th>
              <th>Tech Stack</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.industry}</td>
                <td>{c.location}</td>
                <td>
                  {c.techStack.map((tech, i) => (
                    <span key={i} className="badge bg-primary me-1">
                      {tech}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for small screens */}
      <div className="d-block d-md-none">
        {companies.map((c) => (
          <div key={c._id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{c.name}</h5>
              <p className="card-text">
                <strong>Industry:</strong> {c.industry} <br />
                <strong>Location:</strong> {c.location} <br />
                <strong>Tech Stack:</strong>{" "}
                {c.techStack.map((tech, i) => (
                  <span key={i} className="badge bg-primary me-1">
                    {tech}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyList;

