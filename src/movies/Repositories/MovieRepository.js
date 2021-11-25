import {Repository} from '@s-ui/domain'

export default class HTTPMovieRepository extends Repository {
  #config
  #fetcher
  #fromGetMovieResponseToMovieEntity

  constructor({config, fetcher, fromGetMovieResponseToMovieEntity}) {
    super()
    this.#config = config
    this.#fetcher = fetcher
    this.#fromGetMovieResponseToMovieEntity = fromGetMovieResponseToMovieEntity
  }

  async execute() {
    const {API_KEY, API_BASE_URL} = this.#config
    const url = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=es&page=1`
    const data = await this.#fetcher.get(url)
    const movies = data
    // .map(this.#fromGetMovieResponseToMovieEntity.map)
    // .map(movie => movie.toJSON())
    console.log('>>> from Repos', movies)

    return movies
  }
}
