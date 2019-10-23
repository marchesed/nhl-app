import React from 'react';
import axios from 'axios';
import StandingsTable from './StandingsTable'

class Standings extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            standings: []
        }
        this.getStandings = this.getStandings.bind(this);
        this.getStandings()
    }

    
    getStandings(){
        var url = `https://statsapi.web.nhl.com/api/v1/standings?hydrate=record(overall),division,conference,team(nextSchedule(team),previousSchedule(team))&season=20192020`;
        axios.get(url)
        .then(res => {
            const standings = res.data.records
            console.log('res',standings)
            this.setState({standings: standings})
            console.log('state',this.state)
        })
    }
    componentDidMount(){
        this.getStandings()
    }
    render(){
        console.log('hello',this.state.standings)
        return(<StandingsTable standings={this.state.standings} />)
    }
}

export default Standings