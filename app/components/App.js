var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Popular = require('./Popular');
var Route = ReactRouter.Route;
var Nav = require('./Nav');

class App extends React.Component {
  render() {
    return (
       <Router>
         <Nav />
         <div className='container'>
           <Route path="/popular" component={Popular} />
          </div>
       </Router>
    )
  }
}

module.exports = App2;
