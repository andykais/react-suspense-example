import * as React from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import * as styles from './index.module.css'
import { searchShowsFromString } from '../../../../api'
import { Link } from 'react-router-dom'
import { Store } from '../../../../store'

class ShowItem extends React.Component {
  render() {
    const { tvShow } = this.props
    const { id, name } = tvShow
    return (
      <Link to={`/show-info/${id}`} className={styles.itemContainer}>
        <h3>{name}</h3>
      </Link>
    )
  }
}

const ShowListResource = createResource(searchShowsFromString)
const ShowListComponent = ({ store }) => {
  const searchInput = store.get('searchInputThrottled')
  const showList = ShowListResource.read(searchInput)
  return (
    <div className={styles.listContainer}>
      {showList.map(({ show }) => (
        <ShowItem key={show.id} tvShow={show} />
      ))}
    </div>
  )
}
export const ShowList = Store.withStore(ShowListComponent)
