import { useTranslation } from 'next-i18next'
import { MdStar, MdCalendarToday } from 'react-icons/md'
import * as S from './styles'

interface MovieDetailsProps {
  voteAverage: number
  lastAirDate: Date
  numberOfSeasons: number
}

export const MovieDetails = ({
  voteAverage,
  lastAirDate,
  numberOfSeasons
}: MovieDetailsProps) => {
  const { t } = useTranslation('movie-page')

  return (
    <S.Container>
      {voteAverage && (
        <p>
          <MdStar
            style={{ color: 'yellow' }}
            aria-label={t('vote_average') as string}
          />
          {(voteAverage * 10).toFixed(0)}%
        </p>
      )}
      {lastAirDate && (
        <p>
          <MdCalendarToday aria-label={t('last_air_date') as string} />{' '}
          {new Date(lastAirDate).getFullYear()}
        </p>
      )}
      {numberOfSeasons && (
        <p>
          {numberOfSeasons} {t('season')}
          {numberOfSeasons > 1 && 's'}
        </p>
      )}
    </S.Container>
  )
}
