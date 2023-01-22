import * as S from './styles'

interface MovieTitleProps {
  name: string
  tagline: string
}

export const MovieTitle = ({ name, tagline }: MovieTitleProps) => {
  return (
    <S.Container>
      {name && <h1>{name}</h1>}
      {tagline && <h2>{tagline}</h2>}
    </S.Container>
  )
}
