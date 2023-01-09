export interface IMovieListResult {
  backdrop_path: string
  first_air_date: Date
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface IMovieList {
  page: number
  results: IMovieListResult[]
  total_pages: number
  total_results: number
}
