import {Mapper} from '@s-ui/domain'

export default class FromGetMovieResponseToMovieEntity extends Mapper {
  #config
  #movieEntityFactory

  constructor({config, movieEntityFactory}) {
    super()
    this.#config = config
    this.#movieEntityFactory = movieEntityFactory
  }

  map = movie => {
    return this.#movieEntityFactory({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      posterPath: `${this.#config.IMAGES_BASE_URL}${this.#config.IMAGE_WIDTH}${
        movie.poster_path
      }`,
      releaseDate: movie.release_date
    })
  }
}
