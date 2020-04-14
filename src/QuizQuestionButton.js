import React, { Component } from "react";

class QuizQuestionButton extends Component {
  handleclick() {
        this.props.clickHandler(this.props.button_text)
    }
  render() {
    return (
      <li><button onClick = {this.handleclick.bind(this)}>{this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;
