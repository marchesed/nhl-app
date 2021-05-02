import React from 'react'
import '../css/StandingsTable.css'

const StandingsTable = ({standings}) => {

    const standingsList = standings.map(standing => {

        const tableRows = standing.teamRecords.map(team => {
            return(<tr key={team.id}>
                <td className="team-name">{team.divisionRank}&nbsp;{team.team.name}</td>
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
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>GP</th>
                            <th>W</th>
                            <th>L</th>
                            <th>OTL</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>{tableRows}</tbody>
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