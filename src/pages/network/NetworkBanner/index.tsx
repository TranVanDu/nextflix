import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { MdLocationPin } from 'react-icons/md'
import type { IMovieList, INetworkDetails } from '../../../interfaces'
import { shimmer, toBase64 } from '../../../utils'
import * as S from './styles'

interface INetworkBannerProps {
  movieList: IMovieList
  networkDetails: INetworkDetails
}

const CHANGE_BACKDROP_TIME = 8000

export const NetworkBanner = ({
  movieList,
  networkDetails
}: INetworkBannerProps) => {
  const { t } = useTranslation(['network'])
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const handleIndex = useCallback(
    () =>
      setCurrentItemIndex(
        currentItemIndex < movieList.results.length - 1
          ? currentItemIndex + 1
          : 0
      ),
    [currentItemIndex, movieList]
  )
  useEffect(() => {
    const timerChanger = setTimeout(handleIndex, CHANGE_BACKDROP_TIME)
    return () => clearTimeout(timerChanger)
  }, [handleIndex])

  return (
    <S.Container>
      {movieList.results.map(
        (item, index) =>
          index === currentItemIndex && (
            <S.ImgContainer key={index + `${item.id}` + 'imgSlider'}>
              <Image
                alt=""
                aria-hidden={true}
                src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(705, 525)
                )}`}
                fill
                priority
                sizes="(max-width: 1024px) 75vw,
                      750px"
                onError={handleIndex}
              />
            </S.ImgContainer>
          )
      )}
      <S.Gradient>
        <div />
      </S.Gradient>
      <S.Logo>
        <Image
          alt={`${networkDetails.name} logo`}
          src={`https://image.tmdb.org/t/p/original/${networkDetails.logo_path}`}
          fill
        />
      </S.Logo>
      <S.Content>
        <p>
          <MdLocationPin fontSize={25} aria-label={t('address') as string} />
          {networkDetails.headquarters}
        </p>
        <p>
          {movieList.total_results} {t('shows')}
        </p>
      </S.Content>
    </S.Container>
  )
}
