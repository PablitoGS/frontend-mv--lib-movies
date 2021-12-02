import {UseCase} from '@s-ui/domain'

export default class GetDetailsMovieUseCase extends UseCase {
  #config
  #repository

  constructor({config, repository}) {
    super()
    this.#config = config
    this.#repository = repository
  }

  async execute({id}) {
    const movie = await this.#repository.getDetails({id})
    const dto = movie.toJSON()
    return dto
  }
}
