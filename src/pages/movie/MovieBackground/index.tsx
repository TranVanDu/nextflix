import { useState } from 'react'
import Image from 'next/image'
import * as S from './styles'

interface MovieBackgroundPros {
  backdropPath: string
}

export const MovieBackground = ({ backdropPath }: MovieBackgroundPros) => {
  const [backdropSrc, setBackdropSrc] = useState(
    `https://image.tmdb.org/t/p/original${backdropPath}`
  )

  return (
    <S.Container aria-hidden="true">
      <Image
        fill
        alt=""
        src={backdropSrc}
        onError={() => setBackdropSrc('/assets/imgs/bg.jpg')}
        priority
      />
      <S.Gradient />
      <S.Overlay />
    </S.Container>
  )
}
