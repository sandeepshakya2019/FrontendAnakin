import React from "react";

function UniqueIssue({ issuenumber, data }) {
  console.log(issuenumber, data);
  return (
    <div>
      {data &&
        data.map((d) => {
          if (d.number === issuenumber) {
            return (
              <>
                <h1 className="head-title container-fluid">
                  #{d.number} {d.title}
                </h1>
                <div className="container">
                  <br />
                  <h4 className="headings">Users Related URL</h4>
                  <br />

                  <h6 className="head-url">{d.url}</h6>
                  <h6 className="head-url">{d.repository_url}</h6>
                  <br />

                  <h4 className="headings">Issues Realted Data</h4>
                  <br />

                  <p>ID : {d.id}</p>
                  <p>State : {d.state}</p>
                  <p>Created At : {d.created_at}</p>
                  <p>Updated At : {d.updated_at}</p>
                  <p>Closed At : {d.closed_at}</p>
                  <h4 className="headings">Body of the issue</h4>
                  <br />
                  <dir>{d.body}</dir>
                  <h4 className="headings">User Information</h4>
                  <a href={d.user.html_url}>
                    <p>User Login : {d.user.login}</p>
                  </a>
                  <p>User ID : {d.user.id}</p>
                  <p>User Avatar URL : {d.user.avatar_url}</p>
                </div>
              </>
            );
          }
        })}
    </div>
  );
}

export default UniqueIssue;
