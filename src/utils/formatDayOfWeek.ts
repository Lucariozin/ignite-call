export type DayOfWeekInPortuguese =
  | 'Segunda-feira'
  | 'Terça-feira'
  | 'Quarta-feira'
  | 'Quinta-feira'
  | 'Sexta-feira'
  | 'Sábado'
  | 'Domingo'

type DaysInPortuguese = Record<string, DayOfWeekInPortuguese | undefined>

type FormatDayOfWeek = (day: string) => DayOfWeekInPortuguese

const daysInPortuguese: DaysInPortuguese = {
  1: 'Domingo',
  2: 'Segunda-feira',
  3: 'Terça-feira',
  4: 'Quarta-feira',
  5: 'Quinta-feira',
  6: 'Sexta-feira',
  7: 'Sábado',
}

export const formatDayOfWeek: FormatDayOfWeek = (day) => {
  const dayInPortuguese = daysInPortuguese[day]

  return (dayInPortuguese ?? '') as DayOfWeekInPortuguese
}
