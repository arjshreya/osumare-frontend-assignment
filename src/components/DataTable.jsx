import React from "react";
import "./DataTable.css";

const DataTable = ({ data }) => {
  if (data.length === 0) return null;
  return (
    <section className="data-section">
      <h3>Submitted Entries</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Language</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.gender}</td>
              <td>{row.languages.join(", ")}</td>
              <td>{row.email}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DataTable;
