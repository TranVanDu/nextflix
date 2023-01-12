import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../../next-i18next.config.js'
import { useTranslation } from 'next-i18next'
import { dehydrate, QueryClient } from 'react-query'
import {
  getMovieList,
  getNetwork,
  useQueryMovieList,
  useQueryNetwork
} from '../../querys'
import { Loader } from '../../components/Loader'
import { NetworkBanner } from './NetworkBanner'
import { MovieList } from './MovieList'
import * as S from './styles'

const Network: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation(['network'])
  const { data: movieList, isLoading: isLoadingList } = useQueryMovieList(
    router.query.network as string,
    router.locale!
  )
  const { data: networkDetails, isLoading: isLoadingNetwork } = useQueryNetwork(
    router.query.network as string
  )

  return (
    <>
      <NextSeo
        title={`${networkDetails?.name} ${t('shows')}`}
        description={`${t('description')} ${networkDetails?.name}`}
        openGraph={{
          title: `${networkDetails?.name} ${t('shows')}`,
          url: `https://nextflix-app.vercel.app/network/${networkDetails?.id}/`,
          images: [
            {
              url: `https://nextflix-app.vercel.app/assets/open-graph/network-${networkDetails?.id}.png`,
              alt: networkDetails?.name,
              width: 1200,
              height: 630
            }
          ]
        }}
      />
      <S.Container>
        {(isLoadingList || isLoadingNetwork) && <Loader />}
        {movieList && networkDetails && (
          <>
            <NetworkBanner
              movieList={movieList}
              networkDetails={networkDetails}
            />
            <MovieList movieList={movieList} network={networkDetails.id} />
          </>
        )}
      </S.Container>
    </>
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
  await queryClient.prefetchQuery(
    ['network details', params?.network],
    getNetwork
  )
  return {
    props: {
      ...(await serverSideTranslations(
        locale!,
        ['network'],
        nextI18NextConfig
      )),
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Network
