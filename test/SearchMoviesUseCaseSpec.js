import {HttpMocker} from '@s-ui/mockmock'
import {expect} from 'chai'
import moviesResponse from './fixtures/searchResponse'
import moviesExpected from './fixtures/searchExpected'
import Domain from '../src'

describe('SearchMoviesUseCase', () => {
  const domain = new Domain()
  const mocker = new HttpMocker()
  const keyword = 'Beetlejuice'
  const {API_BASE_URL, API_KEY} = domain.get('config')

  beforeEach(() => {
    mocker.create()
  })

  afterEach(() => {
    mocker.restore()
  })

  it('should return search movies', async () => {
    mocker
      .httpMock(API_BASE_URL)
      .get(
        `/search/movie?api_key=${API_KEY}&language=es&include_adult=false&query=${keyword}`
      )
      .reply(moviesResponse, 200)

    const result = await domain.get('search_movies_use_case').execute({keyword})
    expect(result).to.deep.equals(moviesExpected)
  })
})
