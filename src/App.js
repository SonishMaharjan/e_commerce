import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import "/App.css ";

const HomePage = (props) => {
  // console.log(props);
  return (
    <div>
      <Link to="/topics">Topics click here</Link>
      <button onClick={() => props.history.push("/topics")}>
        Topics button
      </button>
      <h1>Home Page ho</h1>
    </div>
  );
};

const TopicList = (props) => {
  // console.log(props);
  return (
    <div>
      <Link to={`${props.match.url}/13`}>Topi 13</Link>
      <Link to={`${props.match.url}/14`}>Topi 14</Link>
      <Link to={`${props.match.url}/15`}>Topi 15</Link>
      <h1>Topic List Page</h1>
    </div>
  );
};

const TopicDetail = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>Topic Detail Page {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={HomePage}></Route>
        <Route exact path="/topics" component={TopicList}></Route>
        <Route exact path="/topics/:topicId" component={TopicDetail}></Route>
      </Router>
    </div>
  );
}

export default App;
