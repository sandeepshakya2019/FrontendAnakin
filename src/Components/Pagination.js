import React from "react";

function Pagination({ dataperpage, data, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data / dataperpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="container">
      <ul className="pagination">
        {pageNumbers.map((nu) => (
          <li key={nu} className="page-item">
            <p onClick={() => paginate(nu)} className="page-link">
              {nu}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
