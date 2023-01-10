import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { dehydrate, QueryClient } from 'react-query'
import { getMovieList, useQueryMovieList } from '../../querys'
import { shimmer, toBase64 } from '../../utils'
import { Loader } from '../../components/Loader'
import * as S from './styles'

const Network: NextPage = () => {
  const router = useRouter()
  const { data, isLoading } = useQueryMovieList(
    router.query.network as string,
    router.locale!
  )

  return (
    <S.Container>
      {isLoading && <Loader />}
      {data && (
        <S.Grid>
          {data.results.map(movie => (
            <Link
              key={'linkmoviecard' + movie.id + movie.name}
              href={{
                pathname: '/movie/[movie]',
                query: { movie: movie.id, network: router.query.network }
              }}
            >
              <S.Card>
                <S.ImgContainer>
                  <Image
                    alt=""
                    aria-hidden="true"
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    fill
                    priority
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(300, 200)
                    )}`}
                    sizes="(max-width: 600px) 50vw,
                          (max-width: 960px) 33vw,
                          (max-width: 1180px) 25vw,
                          205px"
                  />
                </S.ImgContainer>
                <p>{movie.name}</p>
              </S.Card>
            </Link>
          ))}
        </S.Grid>
      )}
    </S.Container>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const networks = [
    '1024',
    '213',
    '2739',
    '94',
    '64',
    '3290',
    '16',
    '44',
    '43',
    '80',
    '41',
    '535',
    '88'
  ]
  const paths = networks.flatMap(network =>
    locales!.map(locale => ({ params: { network }, locale }))
  )
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ['movie list', params?.network, locale, '1'],
    getMovieList
  )
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Network
