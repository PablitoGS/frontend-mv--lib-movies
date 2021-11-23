import {Repository} from '@s-ui/domain'

export default class HTTPMovieRepository extends Repository {
  #config
  #fetcher

  constructor({config, fetcher}) {
    super()
    this.#config = config
    this.#fetcher = fetcher
  }

  async execute() {
    const {API_KEY, API_BASE_URL} = this.#config
    const url = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=es&page=1`
    const data = await this.#fetcher.get(url)
    return data
  }
}
