import React from 'react'
import axios from 'axios';
import Games from './Games';

class NhlMain extends React.Component{

    state = {
        games: [],
        logoData: {},
        favouriteTeam: '',
    }

    getGames(date){
        var url = `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${date}&endDate=${date}&hydrate=team(leaders(categories=[points,goals,assists],gameTypes=[R])),linescore,broadcasts(all),tickets,game(content(media(epg),highlights(scoreboard)),seriesSummary),radioBroadcasts,metadata,decisions,scoringplays,seriesSummary(series)&site=en_nhlCA`;
        axios.get(url)
        .then(res => {
            const games = res.data.dates[0].games
            this.setState({games})
            console.log(this.state.games)
        })
    }
    getLogoData(){
        var url = `/data/logos.json`;
        axios.get(url)
        .then(res => {
            const logoData = res.data
            console.log('data',Object.keys(logoData))
            this.setState({logoData})
            console.log(this.state.logoData)
        })
    }

    componentDidMount(){
        this.getLogoData()
        var today = new Date()
        var date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()
        this.getGames(date)
        
    }

    render(){
        return(
            <div>
                <h1>Today's NHL Games</h1>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <Games games={this.state.games} logoData={this.state.logoData} />
            </div>
        )
    }
}

export default NhlMain