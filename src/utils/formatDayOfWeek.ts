import type {
  DayOfWeekInEnglish,
  DayOfWeekInPortuguese,
} from '@/@types/daysOfWeek'

type DaysInPortuguese = Record<
  DayOfWeekInEnglish,
  DayOfWeekInPortuguese | undefined
>

type FormatDayOfWeek = (day: DayOfWeekInEnglish) => DayOfWeekInPortuguese

const daysInPortuguese: DaysInPortuguese = {
  monday: 'Segunda-feira',
  tuesday: 'Terça-feira',
  wednesday: 'Quarta-feira',
  thursday: 'Quinta-feira',
  friday: 'Sexta-feira',
  saturday: 'Sábado',
  sunday: 'Domingo',
}

export const formatDayOfWeek: FormatDayOfWeek = (day) => {
  const dayInPortuguese = daysInPortuguese[day]

  return (dayInPortuguese ?? '') as DayOfWeekInPortuguese
}
