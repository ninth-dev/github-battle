import axios from "axios";
// var id = "YOUR_CLIENT_ID";
// var sec = "YOUR_SECRET_ID";
// var params = "?client_id=" + id + "&client_success=" + sec;
const params = "?";

const getProfile = username =>
  axios
    .get(`https://api.github.com/users/${username}${params}`)
    .then(({data}) => data);

const getRepos = username =>
  axios
    .get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
    .then(({data}) => data);

const getStarCount = repos =>
  repos.reduce((count, {stargazers_count}) => count + stargazers_count, 0);

const calculateScore = ({followers}, repos) =>
  followers * 3 + getStarCount(repos);

const handleError = error => {
  console.warn(error);
  return null;
};

const getUserData = player =>
  Promise.all([getProfile(player), getRepos(player)]).then(([profile, repos]) => {
    return {
      profile,
      score: calculateScore(profile, repos)
    };
  });

const sortPlayers = players => players.sort((a, b) => b.score - a.score);

export const battle = players =>
  axios
    .all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);

export const fetchPopularRepos = language => {
  const encodedURI = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  return axios.get(encodedURI).then(response => response.data.items);
};
