import React, { Component } from "react";

class QuizQuestionButton extends Component {
  handleclick() {

    }
  render() {
    return (
      <li><button onClick = {this.handleclick.bind(this)} > {this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;
