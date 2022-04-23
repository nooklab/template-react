import moment from 'moment';
import dayJs from "dayjs";

export default function formatDate(date) {
  return moment(date).format('YYYY/MM/DD');
}


export function enumerateDay(from, to) {
  const list = []
  let current = dayJs(from)
  while (true) {
    if (dayJs(current).isAfter(dayJs(to))) {
      break
    }
    list.push(current.format('YYYY-MM-DD'))
    current = current.add(1, 'day')
  }
  return list
}
