export interface ILocaleOption {
  label: string
  flag: string
  value: string
}

export const optionsData: ILocaleOption[] = [
  {
    label: 'English',
    flag: '🇺🇸',
    value: 'en'
  },
  {
    label: 'Português',
    flag: '🇧🇷',
    value: 'pt-BR'
  },
  {
    label: 'Español',
    flag: '🇪🇸',
    value: 'es-ES'
  }
]
