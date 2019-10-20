import React from 'react'
import '../css/Game.css'

const Games = ({games,logoData}) => {
    function zeroPad(num){
        return num === 0 ? num = "00" : num
    }
    
    const gamesList = games.map(game => {
        var positionXAway = logoData[game.teams.away.team.abbreviation]["x"]
        var positionYAway = logoData[game.teams.away.team.abbreviation]["y"]
        var positionXHome = logoData[game.teams.home.team.abbreviation]["x"]
        var positionYHome = logoData[game.teams.home.team.abbreviation]["y"]
        var time = new Date(game.gameDate)
        var gameTime = (time.getHours()-12) + ":"+ zeroPad(time.getMinutes())
        var homeRecord = game.teams.home.leagueRecord.wins + "-" + game.teams.home.leagueRecord.losses + "-" + game.teams.home.leagueRecord.ot
        var awayRecord = game.teams.away.leagueRecord.wins + "-" + game.teams.away.leagueRecord.losses + "-" + game.teams.away.leagueRecord.ot
        return(
            <div key={game.gamePk} className="game-box col-md-6 row">
                <div className="col-8">
                    <p className="game-text"><span className="sprite" style={{backgroundPositionX: positionXAway,backgroundPositionY: positionYAway }}></span><span>{game.teams.away.team.name}</span><br></br>({awayRecord})</p>
                    <p className="at-text">@</p>
                    <p className="game-text"><span className="sprite" style={{backgroundPositionX: positionXHome,backgroundPositionY: positionYHome }}></span><span>{game.teams.home.team.name}</span><br></br>({homeRecord})</p>
                </div>
                <div className="col-4 time-box">
                    <p className="time-text"><strong>{gameTime} PM ET</strong></p>
                    <p className="time-text">{game.venue.name}</p>
                </div>
            </div>
        )
    })

    

    return(
        <div className="container">
            <div className="row">
                { gamesList }
            </div>
        </div>
    )
}
export default Games