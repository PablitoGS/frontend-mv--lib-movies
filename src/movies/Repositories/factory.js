import {FetcherFactory} from '@s-ui/domain'
import MovieRepository from './MovieRepository'

export default class MovieRepositoryFactory {
  static movieRepository = ({config}) => {
    return new MovieRepository({
      config,
      fetcher: FetcherFactory.httpFetcher({config})
    })
  }
}
