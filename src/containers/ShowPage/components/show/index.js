import * as React from 'react'
import * as styles from './index.module.css'
import { unstable_createResource as createResource } from 'react-cache'
import { fetchShowFromId } from '../../../../api'
import { Img } from '../../../../components/image'

const tupleToObjectOfArrays = (acc, [key, val]) => {
  const array = acc[key] || []
  array.push(val)
  acc[key] = array
  return acc
}

const Episode = ({ name, number }) => (
  <div className={styles.episode}>
    <span>{name}</span>
    <span className={styles.episodeNumber}>episode {number}</span>
  </div>
)

const Season = ({ season: [number, episodes] }) => (
  <div className={styles.seasonContainer}>
    <h3>Season {number}</h3>
    {episodes.map(episode => (
      <Episode key={episode.id} {...episode} />
    ))}
  </div>
)

const ShowResource = createResource(fetchShowFromId)
export const Show = React.memo(({ id }) => {
  const showInfo = ShowResource.read(id)
  const {
    name,
    image,
    summary,
    genres,
    _embedded: { episodes }
  } = showInfo
  const seasonsMap = episodes
    .map(episode => [episode.season, episode])
    .reduce(tupleToObjectOfArrays, {})
  const seasonsList = Object.entries(seasonsMap).sort((a, b) => a[0] - b[0])

  const images = image || {}

  return (
    <div className={styles.container}>
      <div className={styles.summaryContainer}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.secondGlance}>
          <a href={images.original}>
            <Img className={styles.posterImage} src={images.medium} alt="poster image" />
          </a>
          <div>
            <h3>Summary</h3>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
            <h4>Episodes</h4> {episodes.length}
            <h4>Genres</h4>{' '}
            {genres.map(genre => (
              <span key={genre}>{genre} </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.episodeContainer}>
        <h2>Episodes</h2>
        {seasonsList.map(season => (
          <Season key={season[0]} season={season} />
        ))}
      </div>
    </div>
  )
})
