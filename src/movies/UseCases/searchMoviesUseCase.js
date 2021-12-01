import {UseCase} from '@s-ui/domain'

export default class SearchMoviesUseCase extends UseCase {
  #config
  #repository

  constructor({config, repository}) {
    super()
    this.#config = config
    this.#repository = repository
  }

  async execute({keyword}) {
    const entities = await this.#repository.search({keyword})
    const dto = entities.map(movie => movie.toJSON())
    return dto
  }
}
