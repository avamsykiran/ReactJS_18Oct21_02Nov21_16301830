import React from 'react';
import Header from './Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "My First React App",
      tagLine: "..a simple react app demo..."
    };
  }

  btn1Clicked = (event) => {
    let newTitle = window.prompt("Enter title ",this.state.title) ?? this.state.title;
    this.setState({title:newTitle});
  }

  btn2Clicked = (event) => {
    let newTagLine = window.prompt("Enter tag line ",this.state.tagLine) ?? this.state.tagLine;
    this.setState({tagLine:newTagLine});
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} tagLine={this.state.tagLine} />
        <div>
          <button onClick={this.btn1Clicked}>Change Title</button>
          <button onClick={this.btn2Clicked}>Change Tag Line</button>
        </div>
      </div>
    );
  }
}

export default App;
