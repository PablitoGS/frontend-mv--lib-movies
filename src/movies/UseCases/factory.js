import GetMovieUseCase from './getMoviesUseCase'
import MovieRepositoryFactory from '../Repositories/factory'

export default class MovieUseCasesFactory {
  static getMovieUseCase = ({config}) =>
    new GetMovieUseCase({
      repository: MovieRepositoryFactory.movieRepository({config})
    })
}
