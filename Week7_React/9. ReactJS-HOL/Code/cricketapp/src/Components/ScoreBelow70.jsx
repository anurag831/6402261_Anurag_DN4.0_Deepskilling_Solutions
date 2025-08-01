import React from 'react'

const ScoreBelow70 = ({players}) => {
  return (
    <div>
      <ul>
        {players.filter(player => player.score < 70).map((player, index) => (
          <li key={index}>
            Mr. {player.name} <span>{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ScoreBelow70
