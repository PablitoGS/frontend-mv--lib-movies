import {EntryPointFactory} from '@s-ui/domain'
import {config} from './config'

const importMovieUseCasesFactory = () =>
  import(
    /* webpackChunkName: "MovieUseCasesFactory" */ './movies/UseCases/factory'
  )
const useCases = {
  get_movies_use_case: [importMovieUseCasesFactory, 'getMovieUseCase'],
  search_movies_use_case: [importMovieUseCasesFactory, 'searchMoviesUseCase']
}

export default EntryPointFactory({config, useCases})
