import React from 'react'

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ active: !this.state.active })}>
          hello
        </button>
      </div>
    );
  }
}

export default Button;
