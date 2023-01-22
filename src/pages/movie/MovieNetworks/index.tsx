import { useRouter } from 'next/router'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import type { INetwork } from '../../../interfaces'
import * as S from './styles'

interface MovieNetworksProps {
  networks: INetwork[]
}

export const MovieNetworks = ({ networks }: MovieNetworksProps) => {
  const { query } = useRouter()
  const { t } = useTranslation('movie-page')

  return (
    <S.Container aria-label={t('tv_networks') as string}>
      {networks.map(
        (network, index) =>
          index <= 3 && (
            <li key={'networklogomoviepage' + network.logo_path}>
              <Image
                width={150}
                height={65}
                alt={`${network.name} logo`}
                src={
                  network.id.toString() === query.network
                    ? `/assets/logos/${network.id}.png`
                    : `https://image.tmdb.org/t/p/w500/${network.logo_path}`
                }
              />
            </li>
          )
      )}
    </S.Container>
  )
}
