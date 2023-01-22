import Image from 'next/image'
import { shimmer, toBase64 } from '../../../utils'
import * as S from './styles'

interface MoviePosterProps {
  name: string
  posterPath: string
}

export const MoviePoster = ({ name, posterPath }: MoviePosterProps) => {
  return (
    <S.Container>
      <Image
        fill
        priority
        alt={`poster ${name}`}
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        sizes="(max-width: 600px) 55vw,
              (max-width: 700px) 38vw,
              300px"
      />
    </S.Container>
  )
}
