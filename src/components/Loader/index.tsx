import * as S from './styles'

export const Loader = () => {
  return (
    <S.LoadingWrapper>
      <S.Dot delay="0s" />
      <S.Dot delay="0.1s" />
      <S.Dot delay="0.2s" />
    </S.LoadingWrapper>
  )
}
