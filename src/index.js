import {EntryPointFactory} from '@s-ui/domain'
import {config} from './config'

const importMovieUseCasesFactory = () =>
  import(
    /* webpackChunkName: "MovieUseCasesFactory" */ './movies/UseCases/factory'
  )
const useCases = {
  get_movies_use_case: [importMovieUseCasesFactory, 'getMovieUseCase'],
  search_movies_use_case: [importMovieUseCasesFactory, 'searchMoviesUseCase'],
  get_details_movie_use_case: [
    importMovieUseCasesFactory,
    'getDetailsMovieUseCase'
  ]
}

export default EntryPointFactory({config, useCases})
