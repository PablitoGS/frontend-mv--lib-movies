import {FetcherFactory} from '@s-ui/domain'
import MovieRepository from './MovieRepository'
import MovieMapperFactory from '../Mappers/factory'

export default class MovieRepositoryFactory {
  static movieRepository = ({config}) => {
    return new MovieRepository({
      config,
      fetcher: FetcherFactory.httpFetcher({config}),
      fromGetMovieResponseToMovieEntity: MovieMapperFactory.fromGetMovieResponseToMovie(
        {config}
      )
    })
  }
}
