export const searchShowsFromString = async searchStr => {
  if (!searchStr) return []
  const url = new URL('https://api.tvmaze.com/search/shows')
  url.searchParams.set('q', searchStr)
  const response = await fetch(url)
  return await response.json()
}

export const fetchShowFromId = async id => {
  const url = new URL(`https://api.tvmaze.com/shows/${id}`)
  url.searchParams.set('embed', 'episodes')
  const response = await fetch(url)
  return await response.json()
}
