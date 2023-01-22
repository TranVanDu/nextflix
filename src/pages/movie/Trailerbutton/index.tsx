import { type ButtonHTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { MdPlayCircleOutline } from 'react-icons/md'
import * as S from './styles'

interface TrailerbuttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Trailerbutton = (props: TrailerbuttonProps) => {
  const { t } = useTranslation('movie-page')

  return (
    <S.Container {...props}>
      <MdPlayCircleOutline />
      <span>{t('trailer_button')}</span>
    </S.Container>
  )
}
