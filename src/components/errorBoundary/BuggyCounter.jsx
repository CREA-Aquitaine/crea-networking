/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line react/destructuring-assignment
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export default BuggyCounter;
