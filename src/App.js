import React, { Component } from 'react';
import {connect} from 'react-redux';





class App extends Component {
submit(){
  console.log(this.testInput.value);
}

  render() {
    console.log(this.props.testStore);
    return (
      <div >
        <input type="text" className="trackInput" ref={(input) => this.testInput = input }/>
          <button >add track</button>
          <button >Delete first</button>
          <button >Delete Last</button>
          <button onClick={this.submit.bind(this)} >ALL Delete</button>
          <ul></ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
          dispatch => ({})
)(App);
