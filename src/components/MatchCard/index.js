// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props

  const {
    competingTeamLogo,
    competingTeam,
    matchStatus,
    result,
  } = matchCardDetails

  const matchStatusClass = () => {
    if (matchStatus === 'Won') {
      return 'match-won'
    }
    return 'match-lost'
  }

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${matchStatusClass()}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
