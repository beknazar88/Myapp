import React, {Component} from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (

            <div className="Footer">
                <div className="Icon-footer">
                    <div className="Icon-footer1">
                        <a href=""> <i className="fab fa-facebook-f"></i></a>
                    </div>
                    <div className="Icon-footer1">
                        <a href=""><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="Icon-footer1">
                        <a href=""><i className="fab fa-google-plus-g"></i></a>
                    </div>
                    <div className="Icon-footer1">
                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="Icon-footer1">
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

            </div>


        );
    }
}

export default Footer;