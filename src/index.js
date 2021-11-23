import {EntryPointFactory} from '@s-ui/domain'
import {config} from './config'

const importMovieUseCasesFactory = () =>
  import(
    /* webpackChunkName: "MovieUseCasesFactory" */ './movies/UseCases/factory'
  )
const useCases = {
  get_movies_use_case: [importMovieUseCasesFactory, 'GetMovieUseCase']
}

export default EntryPointFactory({config, useCases})
