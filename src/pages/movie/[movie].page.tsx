import { useEffect, useState } from 'react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router.js'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../../next-i18next.config.js'
import { dehydrate, QueryClient } from 'react-query'
import { useMountTransition } from '../../hooks'
import {
  getMovieDetails,
  getMovieTrailer,
  useQueryMovieDetails
} from '../../querys'
import { Loader } from '../../components/Loader'
import { NotFound } from '../../components/NotFound'
import { MovieTitle } from './MovieTitle'
import { MovieBackground } from './MovieBackground'
import { MovieCreators } from './MovieCreators'
import { MovieDetails } from './MovieDetails'
import { MovieGenres } from './MovieGenres'
import { MovieNetworks } from './MovieNetworks'
import { MovieOverview } from './MovieOverview'
import { MoviePoster } from './MoviePoster'
import { TrailerModal } from './TrailerModal'
import { Trailerbutton } from './Trailerbutton'
import * as S from './styles'

const Show: NextPage = () => {
  const router = useRouter()
  const { t, i18n } = useTranslation(['movie-page', 'common'])
  const { data, isLoading } = useQueryMovieDetails(
    router.query.movie as string,
    router.locale!
  )
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ['movie-page', 'common'])
  }, [i18n])
  const [trailerVisibility, setTrailerVisibility] = useState(false)
  const hasTransitionedIn = useMountTransition(trailerVisibility, 500)

  return (
    <>
      <NextSeo
        title={data?.name}
        description={data?.overview}
        openGraph={{
          title: data?.name,
          url: `https://nextflix-app.vercel.app/movie/${data?.id}/`,
          description: data?.overview,
          images: [
            {
              url: `https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}`,
              alt: data?.name,
              width: 1200,
              height: 630
            }
          ]
        }}
      />
      <S.Container>
        {!isLoading && !data && (
          <NotFound tag="h1" description={t('dont_found')} />
        )}
        {isLoading && <Loader />}
        {data && (
          <>
            <MovieBackground backdropPath={data.backdrop_path} />
            <S.Content>
              <MovieTitle name={data.name} tagline={data.tagline} />
              <MoviePoster name={data.name} posterPath={data.poster_path} />
              <MovieNetworks networks={data.networks} />
              <MovieDetails
                voteAverage={data.vote_average}
                lastAirDate={data.last_air_date}
                numberOfSeasons={data.number_of_seasons}
              />
              <MovieGenres genres={data.genres} />
              <MovieCreators creators={data.created_by} />
              <MovieOverview overview={data.overview} />
              <Trailerbutton onClick={() => setTrailerVisibility(true)} />
            </S.Content>
          </>
        )}
      </S.Container>
      {(trailerVisibility || hasTransitionedIn) && (
        <TrailerModal
          visibility={trailerVisibility && hasTransitionedIn}
          setTrailerVisibility={setTrailerVisibility}
        />
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ['movie details', params?.movie, locale],
    getMovieDetails
  )
  await queryClient.prefetchQuery(
    ['movie trailer', params?.movie, locale],
    getMovieTrailer
  )
  return {
    props: {
      ...(await serverSideTranslations(
        locale!,
        ['movie-page', 'common'],
        nextI18NextConfig
      )),
      dehydratedState: dehydrate(queryClient)
    }
  }
}
export default Show
