import React from 'react'
import '../css/StandingsTable.css'

const StandingsTable = ({standings}) => {

    const standingsList = standings.map(standing => {

        const tableRows = standing.teamRecords.map(team => {
            return(<tr>
                <td>{team.divisionRank}&nbsp;{team.team.name}</td>
                <td>{team.gamesPlayed}</td>
                <td>{team.leagueRecord.wins}</td>
                <td>{team.leagueRecord.losses}</td>
                <td>{team.leagueRecord.ot}</td>
                <td>{team.points}</td>
            </tr>)
        })

        return(
            <div>
                <h2>{standing.division.name} Division</h2>
                <table>
                    <tr>
                        <th>Team</th>
                        <th>GP</th>
                        <th>W</th>
                        <th>L</th>
                        <th>OT</th>
                        <th>Points</th>
                    </tr>
                    {tableRows}
                </table>
            </div>
        )
    })

    return(
        <div className="container">
            <h1>NHL Standings</h1>
            { standingsList }
        </div>
    )
}

export default StandingsTable