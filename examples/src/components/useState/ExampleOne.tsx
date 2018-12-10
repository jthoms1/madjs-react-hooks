import * as React from 'react';

type State = {
  count: number
}

export default class Counter extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="counter">
        <p>You clicked {this.state.count} times.</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
      </div>
    )
  }
};
