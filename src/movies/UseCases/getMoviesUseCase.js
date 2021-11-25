import {UseCase} from '@s-ui/domain'

export default class GetMovieUseCase extends UseCase {
  #config
  #repository

  constructor({config, repository}) {
    super()
    this.#config = config
    this.#repository = repository
  }

  async execute() {
    const entities = await this.#repository.execute()
    console.log('>>> from use  case ', entities)
    return entities
  }
}
