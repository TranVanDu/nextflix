export interface ICreatedBy {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: null | string
}

export interface IGenre {
  id: number
  name: string
}

export interface ILastEpisodeToAir {
  air_date: Date
  episode_number: number
  id: number
  name: string
  overview: string
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string
  vote_average: number
  vote_count: number
}

export interface INetwork {
  id: number
  name: string
  logo_path: string
  origin_country: string
}

export interface IProductionCountry {
  iso_3166_1: string
  name: string
}

export interface ISeason {
  air_date: Date
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
}

export interface ISpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface IMovieDetails {
  adult: boolean
  backdrop_path: string
  created_by: ICreatedBy[]
  episode_run_time: number[]
  first_air_date: Date
  genres: IGenre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: Date
  last_episode_to_air: ILastEpisodeToAir
  name: string
  next_episode_to_air: null
  networks: INetwork[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: INetwork[]
  production_countries: IProductionCountry[]
  seasons: ISeason[]
  spoken_languages: ISpokenLanguage[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}
