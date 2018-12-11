import React, { Component } from 'react';
import * as api from '../../api';

type Props = {};
type State = {
  time: number;
  count: number;
}

export default class ExampleThree extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      time: 0,
      count: 0
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  componentDidMount() {
    api.subscribe(this.state.time, this.handleTimeChange);
    document.title = `You clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    api.unsubscribe(this.handleTimeChange);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.count !== this.state.count) {
      document.title = `You clicked ${this.state.count} times`;
      console.log(`You clicked ${this.state.count} times`)
    }
  }

  handleTimeChange(time: number) {
    this.setState((prevState) => ({
      time
    }));
  }

  render() {
    return (
      <div>
        <p>Current time: {this.state.time}</p>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
