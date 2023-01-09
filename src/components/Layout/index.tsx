import { useState } from 'react'
import { useMediaQuery, useMountTransition } from '../../hooks'
import { Header } from '../Header'
import { SideMenu } from '../SideMenu'
import * as S from './styles'

export const Layout = ({
  children
}: {
  children: JSX.Element | JSX.Element[] | string | string[]
}) => {
  const greaterThan1025 = useMediaQuery('(min-width: 1025px)')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const hasTransitionedIn = useMountTransition(isMenuOpen, 1000)
  const closeMenu = () => setIsMenuOpen(false)
  const openMenu = () => setIsMenuOpen(true)

  return (
    <S.Container>
      <Header
        isMenuOpen={isMenuOpen}
        openMenu={openMenu}
        aria-hidden={!greaterThan1025 && isMenuOpen}
      />
      {(isMenuOpen || hasTransitionedIn || greaterThan1025) && (
        <SideMenu
          isMenuOpen={isMenuOpen && hasTransitionedIn}
          closeMenu={closeMenu}
        />
      )}
      <S.Content aria-hidden={!greaterThan1025 && isMenuOpen}>
        {children}
      </S.Content>
    </S.Container>
  )
}
