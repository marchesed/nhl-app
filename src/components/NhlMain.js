import React from 'react'
import axios from 'axios';
import Games from './Games';
import DatePicker from './DatePicker'

class NhlMain extends React.Component{

    
    constructor(props){
        super(props)
        this.state = {
            games: [],
            logoData: {},
            favouriteTeam: '',
            days: [],
            today: null,
            currentDate: new Date()
        }
        this.getGames = this.getGames.bind(this);
        this.dateChange = this.dateChange.bind(this);
        this.refreshGames = this.refreshGames.bind(this);
    }

    getGames(date){
        var url = `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${date}&endDate=${date}&hydrate=team(leaders(categories=[points,goals,assists],gameTypes=[R])),linescore,broadcasts(all),tickets,game(content(media(epg),highlights(scoreboard)),seriesSummary),radioBroadcasts,metadata,decisions,scoringplays,seriesSummary(series)&site=en_nhlCA`;
        axios.get(url)
        .then(res => {
            const games = res.data.dates[0].games
            this.setState({games})
        })
    }
    getLogoData(){
        var url = `/data/logos.json`;
        axios.get(url)
        .then(res => {
            const logoData = res.data
            this.setState({logoData})
        })
    }
    dateChange(){
        var newDate = new Date(document.getElementById('exampleFormControlSelect1').value)
        this.setState({currentDate: newDate})
        var formattedDate = newDate.getFullYear() + "-" + (newDate.getMonth()+1) + "-" + newDate.getDate()
        this.getGames(formattedDate)
    }

    componentDidMount(){
        this.getLogoData()
        var today = new Date()
        var date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()
        this.getGames(date)
        this.setState({'today': today})

        var days = []
        for (var i = -3;i<4;i++){
            var nextDay = new Date(today);
            nextDay.setDate(today.getDate()+i);
            days.push(nextDay)
        }
        this.setState({'days': days})
        
    }
    refreshGames(){
        var formattedDate = this.state.currentDate.getFullYear() + "-" + (this.state.currentDate.getMonth()+1) + "-" + this.state.currentDate.getDate()
        this.getGames(formattedDate)
    }

    

    render(){
        return(
            <div>
                <h1>NHL</h1>
                <button className='refresh-button' onClick={() => this.refreshGames()}>Refresh scores</button>
                <DatePicker onChange={this.dateChange} />
                <Games games={this.state.games} logoData={this.state.logoData} />
            </div>
        )
    }
}

export default NhlMain