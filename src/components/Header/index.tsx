import { MdOutlineMenu } from 'react-icons/md'
import { SelectLocale } from '../SelectLocale'
import { useMediaQuery } from '../../hooks'
import * as S from './styles'

interface HeaderProps {
  isMenuOpen: boolean
  openMenu: () => void
}

export const Header = ({ isMenuOpen, openMenu }: HeaderProps) => {
  const greaterThan1025 = useMediaQuery('(min-width: 1025px)')
  return (
    <S.Container>
      <S.IconButton
        type="button"
        aria-label="open navigation menu"
        aria-hidden={greaterThan1025 || isMenuOpen}
        tabIndex={greaterThan1025 || isMenuOpen ? -1 : 0}
        onClick={openMenu}
      >
        <MdOutlineMenu fontSize="30px" aria-hidden="true" />
      </S.IconButton>
      <SelectLocale />
    </S.Container>
  )
}
