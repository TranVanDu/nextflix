import { useState } from 'react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../../next-i18next.config.js'
import { dehydrate, QueryClient } from 'react-query'
import {
  getMovieDetails,
  getMovieTrailer,
  useQueryMovieDetails
} from '../../querys'
import { MdStar, MdCalendarToday, MdPlayCircleOutline } from 'react-icons/md'
import { useMountTransition } from '../../hooks'
import { shimmer, toBase64 } from '../../utils'
import { Loader } from '../../components/Loader'
import { TrailerModal } from '../../components/TrailerModal'
import * as S from './styles'
import { NotFound } from '../../components/NotFound'

const Show: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('movie-page')
  const { data, isLoading, isError } = useQueryMovieDetails(
    router.query.movie as string,
    router.locale!
  )
  const [trailerVisibility, setTrailerVisibility] = useState(false)
  const hasTransitionedIn = useMountTransition(trailerVisibility, 500)

  return (
    <>
      <S.Container>
        {isLoading && <Loader />}
        {isError && !data && (
          <NotFound tag="h1" description={t('dont_found')} />
        )}
        {data && (
          <S.FlexContent>
            <S.Title>
              <h1>{data.name}</h1>
              <h2>{data.tagline}</h2>
            </S.Title>
            <S.PosterWrapper>
              <Image
                fill
                priority
                alt={`poster ${data.name}`}
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
                sizes="(max-width: 600px) 80vw,
                      (max-width: 900px) 40vw,
                      (max-width: 1025px) 35vw,
                      (max-width: 1100px) 300px,
                      350px"
              />
            </S.PosterWrapper>
            <S.Infos>
              {data.vote_average && (
                <p>
                  <MdStar
                    style={{ color: 'yellow' }}
                    aria-label={t('vote_average')}
                  />
                  {(data.vote_average * 10).toFixed(0)}%
                </p>
              )}
              {data.last_air_date && (
                <p>
                  <MdCalendarToday aria-label={t('last_air_date')} />{' '}
                  {new Date(data.last_air_date).getFullYear()}
                </p>
              )}
              {data.number_of_seasons && (
                <p>
                  {data.number_of_seasons} {t('season')}
                  {data.number_of_seasons > 1 && 's'}
                </p>
              )}
            </S.Infos>
            {data.genres[0] && (
              <S.Genres aria-label={t('genres')}>
                {data.genres.map(genre => (
                  <li key={'genres' + genre.name + genre.id}>{genre.name}</li>
                ))}
              </S.Genres>
            )}
            {data.created_by[0] && (
              <S.Creator>
                <h3>{t('creator')}</h3>
                <p>{data.created_by[0].name}</p>
              </S.Creator>
            )}
            {data.overview && (
              <div>
                <h3 className="h4">{t('overview')}</h3>
                <p>{data.overview}</p>
              </div>
            )}
            <S.Button type="button" onClick={() => setTrailerVisibility(true)}>
              <MdPlayCircleOutline />
              <span>{t('trailer_button')}</span>
            </S.Button>
          </S.FlexContent>
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
