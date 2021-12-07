import {HttpMocker} from '@s-ui/mockmock'
import {expect} from 'chai'
import moviesResponse from './fixtures/detailsResponse'
import moviesExpected from './fixtures/detailsExpected'
import Domain from '../src'

describe('GetDetailsMovieUseCase', () => {
  const domain = new Domain()
  const mocker = new HttpMocker()
  const id = '512195'
  const {API_BASE_URL, API_KEY} = domain.get('config')

  beforeEach(() => {
    mocker.create()
  })

  afterEach(() => {
    mocker.restore()
  })

  it('should return movie details', async () => {
    mocker
      .httpMock(API_BASE_URL)
      .get(`/movie/${id}?api_key=${API_KEY}&language=es`)
      .reply(moviesResponse, 200)

    const result = await domain.get('get_details_movie_use_case').execute({id})
    console.log('response', moviesExpected)

    console.log(result)
    expect(result).to.deep.equals(moviesExpected)
  })
})
