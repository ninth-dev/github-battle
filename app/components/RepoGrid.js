var React = require("react");
var PropTypes = require('prop-types');

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map(function(repo, index) {
        return (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  src={repo.owner.avatar_url}
                  alt={"Avatar for " + repo.owner.login}
                  className="avatar"
                />
                <li>
                  <a href={repo.html_url}>{repo.name}</a>
                </li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequried
}

module.exports = RepoGrid;
