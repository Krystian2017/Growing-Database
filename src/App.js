import React, { Component } from "react";
import "./App.css";

// pseudo growing database
const data = [
  { id: 1, title: "Message number 1", body: "Message content number 1 ..." },
  { id: 2, title: "Message number 2", body: "Message content number 2 ..." }
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Message number ${index}`,
    body: `Message content number ${index} ...`
  });
  // console.log(data);
}, 5000);

class App extends Component {
  state = {
    comments: [...data]
  };

  getData = () => {
    if (this.state.comments.length !== data.length) {
      console.log("update");
      this.setState({
        comments: [...data]
      });
    } else {
      console.log("the same data - does not update");
    }
  };

  componentDidMount() {
    this.idI = setInterval(this.getData, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.idI);
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));
    // console.log(comments);
    return (
      <div className="App">
        <div>
          <h1 className="App-header">Growing Database</h1>
          <p className="App-description">
            This application is a pseudo growing database - I created it with
            the help of create-app React. It is simply app and you can find the
            code on{" "}
            <a
              className="App-link"
              href="https://github.com/Krystian2017/Growing-Database"
            >
              my GitHub account.
            </a>
          </p>
        </div>
        {comments.reverse()}
      </div>
    );
  }
}

export default App;
