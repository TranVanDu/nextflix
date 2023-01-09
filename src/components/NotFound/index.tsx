import Lottie, { type LottieProps } from 'react-lottie'
import dontFoundLottie from '../../../public/assets/lotties/38463-error.json'
import * as S from './styles'

type partial<T extends object> = {
  [K in keyof T]?: T[K] extends object ? partial<T[K]> : T[K]
}

interface NotFoundProps {
  tag: string
  description: string
  lottieProps?: partial<LottieProps>
}

export const NotFound = ({ tag, description, lottieProps }: NotFoundProps) => {
  return (
    <S.Container>
      <h1 className={tag}>{description}</h1>
      <Lottie
        height={350}
        {...lottieProps}
        options={{
          loop: true,
          autoplay: true,
          animationData: dontFoundLottie
        }}
      />
    </S.Container>
  )
}
