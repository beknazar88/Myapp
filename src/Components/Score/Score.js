import React, { Component } from 'react';
import './Score.css'


const   Sity = ["Москва", "Алматы", "Париж", "Ташкент", "Душанбе"];



document.write("<p>");


class Score extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            time:[]
        };


    }
    componentDidMount(){

        const self = this;

        fetch("https://apifootball.com/api/?action=get_events&from=2016-10-30&to=2019-05-20&league_id=62&APIkey=fc78cdae63ae435404b17a24913c637c0a1abe90362665ebf15242563cd29475")
            .then(res =>res.json())
            .then(json=>{

                this.setState({data:json});
            });
    }

    render() {

        const country =this.state.data;

        return (
            <div id='Section0'>
            <div className='Bg-fon'>
            <div className='Score'>
                <p> </p>
                {country.map((place,index)=>( <p  className='score' key={index}>{ place.match_time +"-"+ place.match_awayteam_name +' '+ place.match_awayteam_score +' - ' + place.match_hometeam_score+' '+ place.match_hometeam_name}</p>))}

            </div>
            </div>
            </div>
        )

    }
}

    export default  Score;