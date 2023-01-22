import { useTranslation } from 'next-i18next'
import * as S from './styles'

interface MovieOvervewProps {
  overview: string
}

export const MovieOverview = ({ overview }: MovieOvervewProps) => {
  const { t } = useTranslation('movie-page')

  return (
    <>
      {overview && (
        <S.Container>
          <h3 className="h4">{t('overview')}</h3>
          <p>{overview}</p>
        </S.Container>
      )}
    </>
  )
}
