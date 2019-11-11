import React from "react";

class Foo extends React.Component {
  state = { showing: true };

  render() {
    const { showing } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ showing: !showing })}>
          toggle
        </button>
        {showing ? <div>This is visible</div> : null}
      </div>
    );
  }
}

export default Foo;
