import React from "react";
import { useNavigate } from "react-router-dom";

function Issue({ data, loading, changeCurrent }) {
  const history = useNavigate();
  if (loading) {
    return <h2>Loading ...</h2>;
  }

  const clickHandler = (num) => {
    changeCurrent(num);
    history(`/issue/${num}`);
  };
  return (
    <div className="container-fluid">
      {data &&
        data.map((d) => {
          return (
            <div
              className="main_items m-3"
              key={d.number}
              onClick={() => clickHandler(d.number)}
            >
              <div className="id">
                <h3>
                  #{d.number} {d.title}
                </h3>
                <p>Online URL : {d.url}</p>
                <p>State : {d.state}</p>
                <p>Created at : {d.created_at}</p>
                <p>Issue Number : {d.number}</p>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={d.user.avatar_url}
                  className="card-img-top"
                  alt="avatar url"
                />
                <div className="card-body">
                  <h5 className="card-title">{d.user.login}</h5>
                  <p className="card-text">
                    <a href={d.user.html_url}>{d.user.html_url}</a>
                    <br />
                    <span>Id: {d.user.id}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Issue;
