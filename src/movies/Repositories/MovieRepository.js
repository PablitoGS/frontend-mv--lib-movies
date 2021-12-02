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
    const {data} = await this.#fetcher.get(url)
    const movies = data.results.map(this.#fromGetMovieResponseToMovieEntity.map)
    return movies
  }

  async search({keyword}) {
    const {API_KEY, API_BASE_URL} = this.#config
    const url = `${API_BASE_URL}/search/movie?api_key=${API_KEY}&language=es&include_adult=false&query=${keyword}`
    const {data} = await this.#fetcher.get(url)
    const movies = data.results.map(this.#fromGetMovieResponseToMovieEntity.map)
    return movies
  }

  async getDetails({id}) {
    const {API_KEY, API_BASE_URL} = this.#config
    const url = `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es`
    const {data} = await this.#fetcher.get(url)
    const movie = this.#fromGetMovieResponseToMovieEntity.map(data)
    return movie
  }
}
