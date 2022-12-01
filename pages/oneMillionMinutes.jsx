import { useEffect } from 'react'
import { useState } from 'react'
import getUsers from '../services/mongoService'

function OneMillionMinutes({ sortedUsers }) {
  console.log(sortedUsers)
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }
  return (
    <div className='page'>
      <h1 className="heading">One Million Minutes Challenge Leaderboard</h1>
      <p className="description">The One Million Minutes Challenge is a Twitter community challenge in which members will achieve 1 million minutes of activity by the end of 2022. </p>
      <div className='tweets'>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">An example of a successful tweet would be— <br/><br/>Cheers to 0 minutes of fitness demonstrating <a href="https://twitter.com/hashtag/OneMillionMinutes?src=hash&amp;ref_src=twsrc%5Etfw">#OneMillionMinutes</a> on twitter. Let’s go <a href="https://twitter.com/hashtag/FitDevs?src=hash&amp;ref_src=twsrc%5Etfw">#FitDevs</a>!</p>&mdash; katalyst kat (@katalyst_katt) <a href="https://twitter.com/katalyst_katt/status/1562380034618249217?ref_src=twsrc%5Etfw">August 24, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>

        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Examples of Qualifying Activity Minutes— <br/><br/>💃🏻 Dancing, Hiking, Cycling<br/>🏋️‍♀️ Gymming, Meditation, Yoga, Stretching Breaks etc <br/>🐶 Pet walking, Evening Stroll, Coffee Breaks<br/>⚽️ All sports, really</p>&mdash; katalyst kat (@katalyst_katt) <a href="https://twitter.com/katalyst_katt/status/1562380043824730112?ref_src=twsrc%5Etfw">August 24, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
      <table>
        <thead>
          <tr>
            <th className='align-right'>Rank</th>
            <th>Username</th>
            <th className='align-right'>Minutes</th>
          </tr>
        </thead>
        <tbody>
        {sortedUsers.map(result => {
          return (
          <tr key={result.username}>
            <td className='align-right'>{result.rank}</td>
            <td>{result.username}</td>
            <td className='align-right'>{result.total}</td>
          </tr> )
        })}
        </tbody>
      </table>
    </div>
  )
}

export async function getServerSideProps() {
  const users = await getUsers();

  return {
    props: {
      sortedUsers: users
    }
  }
}

export default OneMillionMinutes