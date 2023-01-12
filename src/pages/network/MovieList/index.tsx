import Link from 'next/link'
import Image from 'next/image'
import type { IMovieList } from '../../../interfaces'
import { shimmer, toBase64 } from '../../../utils'
import * as S from './styles'

interface IMovieListProps {
  movieList: IMovieList
  network: number
}

export const MovieList = ({ movieList, network }: IMovieListProps) => {
  return (
    <S.Container>
      {movieList.results
        .filter(result => result.poster_path !== null || undefined)
        .map(movie => (
          <Link
            key={'linkmoviecard' + movie.id + movie.name}
            href={{
              pathname: '/movie/[movie]',
              query: { movie: movie.id, network }
            }}
          >
            <S.Card>
              <S.ImgContainer>
                <Image
                  alt=""
                  aria-hidden="true"
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(300, 200)
                  )}`}
                  sizes="(max-width: 600px) 50vw,
                          (max-width: 960px) 33vw,
                          (max-width: 1180px) 25vw,
                          205px"
                />
              </S.ImgContainer>
              <p>{movie.name}</p>
            </S.Card>
          </Link>
        ))}
    </S.Container>
  )
}
