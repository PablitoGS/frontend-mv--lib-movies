import FromGetMovieResponseToMovieEntity from './FromGetMovieResponseToMovieEntity'
import MovieEntityFactory from '../Entities/factory'

export default class MovieMappersFactory {
  static fromGetMovieResponseToMovie = ({config}) => {
    return new FromGetMovieResponseToMovieEntity({
      movieEntityFactory: MovieEntityFactory.movieEntity,
      config
    })
  }
}
