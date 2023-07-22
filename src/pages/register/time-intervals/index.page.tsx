import { ErrorMessageProvider } from './hooks/ErrorMessage'

import TimeIntervals from './TimeIntervals'

const TimeIntervalsPage = () => {
  return (
    <ErrorMessageProvider>
      <TimeIntervals />
    </ErrorMessageProvider>
  )
}

export default TimeIntervalsPage
