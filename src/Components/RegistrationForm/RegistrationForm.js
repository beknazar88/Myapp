import React, { Component } from 'react';

import './RegistrationForm.css';

class RegistrationForm extends Component {

constructor() {
    super();
    this.state = {name: ''}


}


    handleInput(event){
      this.setState({name:event.target.value});


    }
    handleSubmit(event){
    event.preventDefault();
    console.log(this.state.name)

    }


    render(){

        return (
            <form >
                <input type="text" placeholder='Name'
                onChange={this.handleInput.bind(this)}
                />
                <button onClick={this.handleSubmit.bind(this)}>GO</button>
            </form>
        );
    }
}



export default  RegistrationForm;