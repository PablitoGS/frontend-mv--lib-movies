import {HttpMocker} from '@s-ui/mockmock'
import {expect} from 'chai'
import moviesResponse from './fixtures/moviesResponse'
import moviesExpected from './fixtures/moviesExpected'
import Domain from '../src'

describe('GetMovieMoviesUseCase', () => {
  const domain = new Domain()
  const mocker = new HttpMocker()
  const {API_BASE_URL, API_KEY} = domain.get('config')

  beforeEach(() => {
    mocker.create()
  })

  afterEach(() => {
    mocker.restore()
  })

  it('should return movies', async () => {
    mocker
      .httpMock(API_BASE_URL)
      .get(`/movie/popular?api_key=${API_KEY}&language=es&page=1`)
      .reply(moviesResponse, 200)

    const result = await domain.get('get_movies_use_case').execute()

    expect(result).to.deep.equals(moviesExpected)
  })
})
