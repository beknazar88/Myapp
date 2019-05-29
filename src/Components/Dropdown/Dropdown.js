import React, {Component} from 'react';

import './Dropdown.css';
import Nasa from "../../NASA.png";

class Dropdown extends Component {
    constructor(){
        super();
        this.state = {isOpened : false};
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(){
        this.setState({isOpened: !this.state.isOpened})
    }



    render() {
        console.log(this.state.isOpened)
        let div;
        if (this.state.isOpened){
            div = <div>Это произвольный текст</div>;
        }

        return <div onClick={this.toggleState}>Dropdown{div}</div>;

    }
}

export default Dropdown;
