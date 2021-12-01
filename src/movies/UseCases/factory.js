import GetMovieUseCase from './getMoviesUseCase'
import SearchMoviesUseCase from './searchMoviesUseCase'
import MovieRepositoryFactory from '../Repositories/factory'

export default class MovieUseCasesFactory {
  static getMovieUseCase = ({config}) =>
    new GetMovieUseCase({
      repository: MovieRepositoryFactory.movieRepository({config})
    })

  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      repository: MovieRepositoryFactory.movieRepository({config})
    })
}
