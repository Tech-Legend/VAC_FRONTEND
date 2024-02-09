import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      userInput: "",
      list: [],
    };
  }

  // Set a user input value
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  // Add item if user input is not empty
  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        // Add a random id which is used to delete
        id: Math.random(),

        // Add a user value to the list
        value: this.state.userInput,
      };

      // Update list
      const list = [...this.state.list];
      list.push(userInput);

      // Reset state
      this.setState({
        list,
        userInput: "",
      });
    }
  }

  // Function to delete item from the list using id to delete
  deleteItem(key) {
    const list = [...this.state.list];

    // Filter values and leave the value which we need to delete
    const updateList = list.filter((item) => item.id !== key);

    // Update list in state
    this.setState({
      list: updateList,
    });
  }

  editItem = (index) => {
    const todos = [...this.state.list];
    const editedTodo = prompt("Edit the todo:");

    if (editedTodo !== null && editedTodo.trim() !== "") {
      todos[index].value = editedTodo;

      // Update list in state
      this.setState({
        list: todos,
      });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter text"
                value={this.state.userInput}
                onChange={(e) => this.updateInput(e.target.value)}
              />
              <Button variant="outline-secondary" onClick={() => this.addItem()}>
                Add
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {this.state.list.map((item, index) => (
                <div key={item.id}>
                  <ListGroup.Item>
                    {item.value}
                    <span style={{ float: "right" }}>
                      <Button
                        style={{ marginRight: "10px" }}
                        variant="light"
                        onClick={() => this.deleteItem(item.id)}
                      >
                        Delete
                      </Button>
                      <Button variant="light" onClick={() => this.editItem(index)}>
                        Edit
                      </Button>
                    </span>
                  </ListGroup.Item>
                </div>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
