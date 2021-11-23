import MovieEntity from './MovieEntity'

export default class MovieEntityFactory {
  static movieEntity = data => {
    return new MovieEntity(data)
  }
}
