export const searchShowsFromString = async searchStr => {
  if (!searchStr) return []
  const url = new URL('http://api.tvmaze.com/search/shows')
  url.searchParams.set('q', searchStr)
  const response = await fetch(url)
  return await response.json()
}

export const fetchShowFromId = async id => {
  const url = new URL(`http://api.tvmaze.com/shows/${id}`)
  url.searchParams.set('embed', 'episodes')
  const response = await fetch(url)
  return await response.json()
}

export const fetchShowList = async () => {
  const response = await fetch('http://localhost:3000/shows')
  return await response.json()
}
