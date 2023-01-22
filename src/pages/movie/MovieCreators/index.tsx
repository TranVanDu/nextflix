/* eslint-disable indent */
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import type { ICreatedBy } from '../../../interfaces'
import * as S from './styles'

interface MovieCreatorsProps {
  creators: ICreatedBy[]
}

export const MovieCreators = ({ creators }: MovieCreatorsProps) => {
  const { t } = useTranslation('movie-page')

  return (
    <S.Container>
      <>
        {creators.map(
          (creator, index) =>
            index <= 2 && (
              <li key={creator.name + 'creator'}>
                <div className="text">
                  <h3 className="h4">{t('creator')}</h3>
                  <p>{creator.name}</p>
                </div>
                <div className="imgContainer">
                  <Image
                    width={65}
                    height={65}
                    alt={t('profile_picture_alt') + creator.name}
                    src={
                      creator.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${creator.profile_path}`
                        : creator.gender === 1
                        ? '/assets/imgs/women-avatar.png'
                        : '/assets/imgs/men-avatar.png'
                    }
                  />
                </div>
              </li>
            )
        )}
        {!creators[0] && (
          <li>
            <div className="text">
              <h3 className="h4">{t('creator')}</h3>
              <p>{t('creator_no_information')}</p>
            </div>
            <div className="imgContainer">
              <Image
                width={65}
                height={65}
                alt=""
                aria-hidden="true"
                src="/assets/imgs/men-avatar.png"
              />
            </div>
          </li>
        )}
      </>
    </S.Container>
  )
}
