import React from "react";
import PropTypes from "prop-types";

export const RepoGrid = ({ repos }) => (
  <ul className="popular-list">
    {repos.map((repo, index) => {
      const {
        name,
        owner,
        stargazers_count,
        html_url
      } = repo;
      return (
        <li key={name} className="popular-item">
          <div className="popular-rank">#{index + 1}</div>
          <ul className="space-list-items">
            <li>
              <img
                src={owner.avatar_url}
                alt={"Avatar for " + owner.login}
                className="avatar"
              />
              <li>
                <a href={html_url}>{name}</a>
              </li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </li>
          </ul>
        </li>
      );
    })}
  </ul>
);

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequried
};
