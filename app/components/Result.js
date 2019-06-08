var React = require("react");

function Result(props) {
  console.log(props.location.search);
  return <div>RESULT!</div>;
}

module.exports = Result;
