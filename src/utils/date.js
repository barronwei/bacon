import addHours from 'date-fns/add_hours'
import addDays from 'date-fns/add_days'

export const dateToSeconds = date => date.getTime()/1000
export const secondsToDate = int => new Date(int * 1000)

export const coordToTime = (x, y, startDate, minTime, inc=15) => dateToSeconds(addHours(addDays(startDate, x), minTime + inc/60 * y))
//where time in seconds, returns [x,y]
export const timeToCoord = (time, startDate, minTime, inc=15) => {
  const dayDelta = Math.floor(secondsToDate(time-dateToSeconds(startDate))/(60*24));  
  const quarterHourIncrements = ((time % (60*24))/60 - minTime) * 60/inc
  
  return [dayDelta, quarterHourIncrements]
}

