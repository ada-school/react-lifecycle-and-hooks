import React from "react";

import Card from "../../../components/Card";

export default class ClassLifeCycles extends React.Component {
  state = {
    counter: 0,
  };

  constructor(props) {
    super(props);
    console.log("El componente se construyo!");
  }

  componentDidMount() {
    console.log("El componente se montó!");
  }

  componentDidUpdate() {
    console.log("El componente se actualizó!");
  }

  componentWillUnmount() {
    console.log("El componente se des-montó");
  }

  render() {
    return (
      <Card showButtons={false}>
        <div className="flex-center flex-column">
          <h3>Hello! this is a class component</h3>
          <div className="flex-center flex-column">
            <span>{this.state.counter}</span>
            <div>
              <button
                className="app-button"
                onClick={() =>
                  this.setState({ counter: this.state.counter - 1 })
                }
              >
                -
              </button>
              <button
                className="app-button"
                onClick={() =>
                  this.setState({ counter: this.state.counter + 1 })
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
