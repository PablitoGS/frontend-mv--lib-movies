import GetMovieUseCase from './getMoviesUseCase'
import MovieRepositoryFactory from '../Repositories/Factory'

export default class MovieUseCasesFactory {
  static getMovieUseCase = ({config}) =>
    new GetMovieUseCase({
      repository: MovieRepositoryFactory.movieRepository({config})
    })
}
