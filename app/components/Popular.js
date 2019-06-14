import React from "react";
import PropTypes from "prop-types";

import * as api from "../utils/api";

import { Loading } from "./Loading";
import { RepoGrid } from "./RepoGrid";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

export const SelectLanguage = ({ selectedLanguage, onSelect }) => (
  <ul className="languages">
    {languages.map(function(lang) {
      return (
        <li
          style={lang === selectedLanguage ? { color: "#d0021b" } : null}
          onClick={onSelect.bind(null, lang)}
          key={lang}
        >
          {lang}
        </li>
      );
    })}
  </ul>
);

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(() => ({
      selectedLanguage: lang,
      repos: null
    }));

    api.fetchPopularRepos(lang).then(repos => {
      this.setState(() => ({
        repos
      }));
    });
  }

  render() {
    const { selectedLanguage, repos } = this.state;

    return (
      <div>
        <SelectLanguage
          selectedLanguage={selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!repos ? <Loading /> : <RepoGrid repos={repos} />}
      </div>
    );
  }
}
