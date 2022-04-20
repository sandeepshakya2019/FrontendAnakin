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
                <h1>
                  #{d.number} {d.title}
                </h1>
                <h3>{d.url}</h3>
                <h3>{d.repository_url}</h3>
                <p>ID : {d.id}</p>
                <p>State : {d.state}</p>
                <p>Created At : {d.created_at}</p>
                <p>Updated At : {d.updated_at}</p>
                <p>Closed At : {d.closed_at}</p>
                <h3>Body of the issue</h3>
                <div dangerouslySetInnerHTML={{ __html: d.body }} />
                <h4>User Information</h4>
                <a href={d.user.html_url}>
                  <p>User Login : {d.user.login}</p>
                </a>
                <p>User ID : {d.user.id}</p>
                <p>User Avatar URL : {d.user.avatar_url}</p>
              </>
            );
          }
        })}
    </div>
  );
}

export default UniqueIssue;
