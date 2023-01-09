import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../../next-i18next.config'
import { MdArrowBack } from 'react-icons/md'
import { NotFound } from '../../components/NotFound'
import * as S from './styles'

const Custom404: NextPage = () => {
  const { back } = useRouter()
  const { t } = useTranslation('404')
  return (
    <S.Container>
      <NotFound tag="h1" description={t('page_dont_found')} />
      <S.Button onClick={() => back()}>
        <MdArrowBack fontSize="1.5rem" />
        {t('back')}
      </S.Button>
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['404'], nextI18NextConfig))
    }
  }
}
export default Custom404
