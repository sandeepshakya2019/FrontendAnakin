import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Issue from "./Components/Issue";
import Pagination from "./Components/Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UniqueIssue from "./Components/UniqueIssue";

function App() {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuePerPage] = useState(5);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setloading(true);
    axios
      .get(
        "https://api.github.com/repos/practical-tutorials/project-based-learning/issues"
      )
      .then((res) => {
        // console.log(res.data.length);
        setdata(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);

  function changeCurrent(num) {
    setCurrent(num);
  }

  // Get Perpage Issues
  if (data && data.length !== 0) {
    const indexofLast = currentPage * issuePerPage;
    const indexofFirst = indexofLast - issuePerPage;
    var currentIssue = data.slice(indexofFirst, indexofLast);
  }
  // Get Pages

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <h1>Public Repo Issues</h1>
              <br />
              {data && (
                <>
                  <Issue
                    data={currentIssue}
                    loading={loading}
                    changeCurrent={changeCurrent}
                  />
                  <Pagination
                    dataperpage={issuePerPage}
                    data={data.length}
                    paginate={paginate}
                  />
                </>
              )}
            </div>
          }
        ></Route>
        <Route
          exact
          path={`/issue/${current}`}
          element={<UniqueIssue issuenumber={current} data={data} />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
