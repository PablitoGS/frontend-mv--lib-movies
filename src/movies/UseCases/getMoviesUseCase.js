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
    console.log('misco')
    const entities = await this.#repository.execute()
    const dto = entities.map(data => data.toJSON())
    return dto
  }
}
