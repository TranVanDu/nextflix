import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { MdExpandMore } from 'react-icons/md'
import { useOnClickOutside } from '../../hooks'
import { optionsData } from './options'
import { handleInputKeyDown, handleListKeyDown } from './keyboard.utils'
import * as S from './styles'

interface SelectLocaleProps {
  options?: typeof optionsData
}

export const SelectLocale = ({ options = optionsData }: SelectLocaleProps) => {
  const router = useRouter()
  const selectedValue = options.find(option => option.value === router.locale)
  const selectedIndex = options.indexOf(selectedValue!)
  const [menuVisibility, setMenuVisibility] = useState(false)
  const [activeIndex, setActiveIndex] = useState(selectedIndex)
  const inputRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const handleLocaleChange = () => {
    options[activeIndex].value !== router.locale &&
      router.push(
        { pathname: router.pathname, query: router.query },
        router.asPath,
        {
          locale: options[activeIndex].value
        }
      )
  }
  const focusOpition = (index?: number) =>
    (listRef.current?.children[index ?? activeIndex] as HTMLElement).focus()

  const handleIndex = (index: number) => {
    setActiveIndex(index)
    focusOpition(index)
  }
  const toggleMenu = () => {
    setMenuVisibility(!menuVisibility)
    inputRef.current?.focus()
    menuVisibility
      ? handleLocaleChange()
      : requestAnimationFrame(() => focusOpition())
  }

  useOnClickOutside(inputRef, () => listRef.current && toggleMenu())

  return (
    <S.Container>
      <S.Input
        role="combobox"
        aria-controls="listbox1"
        aria-expanded={menuVisibility}
        aria-label="select language"
        tabIndex={0}
        ref={inputRef}
        onClick={toggleMenu}
        onKeyDown={e => handleInputKeyDown(e, toggleMenu)}
      >
        <div aria-hidden="true">
          {`${selectedValue!.flag} ${selectedValue!.label}`}
          <MdExpandMore fontSize="25px" />
        </div>
      </S.Input>
      {menuVisibility && (
        <S.Menu
          role="listbox"
          id="listbox1"
          ref={listRef}
          onKeyDown={e =>
            handleListKeyDown(e, toggleMenu, activeIndex, options, handleIndex)
          }
        >
          {options.map((option, index) => (
            <li
              key={option.label + option.value}
              role="option"
              tabIndex={-1}
              aria-selected={option.value === router.locale}
              onMouseOver={() => handleIndex(index)}
              onClick={() => handleIndex(index)}
            >
              <div>
                <span aria-hidden="true">{option.flag + ' '}</span>
                {option.label}
              </div>
            </li>
          ))}
        </S.Menu>
      )}
    </S.Container>
  )
}
