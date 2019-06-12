import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  state = {
    todoList: [],
    name: "",
    todo: ""
  };
  addTodo = this.addTodo.bind(this);
  handleinput = event => {
    this.setState({ todo: event.target.value });
  };

  addTodo() {
    this.setState({
      todoList: [...this.state.todoList, this.state.todo],
      todo: ""
    });
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.todo}</h1>
        <input
          type="text"
          value={this.state.todo}
          onChange={this.handleinput}
        />
        <button onClick={this.addTodo}>Add</button>

        <ul>
          {this.state.todoList.map(function(item, index) {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        {/* <ul>
          {this.state.todo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default App;
