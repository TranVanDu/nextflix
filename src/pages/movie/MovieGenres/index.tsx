import { useTranslation } from 'next-i18next'
import type { IGenre } from '../../../interfaces'
import * as S from './styles'

interface MovieGenresProps {
  genres: IGenre[]
}

export const MovieGenres = ({ genres }: MovieGenresProps) => {
  const { t } = useTranslation('movie-page')

  return (
    <S.Container aria-label={t('movie_genres') as string}>
      {genres.map(genre => (
        <li key={'genres' + genre.name + genre.id}>
          {genre.name.replaceAll('-', '')}
        </li>
      ))}
    </S.Container>
  )
}
