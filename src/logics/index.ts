import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

// import updateLocale from 'dayjs/plugin/updateLocale'

// dayjs.extend(updateLocale)

// dayjs.updateLocale('en', {
//   relativeTime: {
//     future: "in %s",
//     past: "%s ago",
//     s: 'a few seconds',
//     m: "a minute",
//     mm: "%d minutes",
//     h: "an hour",
//     hh: "%d hours",
//     d: "a day",
//     dd: "%d days",
//     M: "a month",
//     MM: "%d months",
//     y: "a year",
//     yy: "%d years"
//   }
// })


export function formatDate(d: string | Date, onlyDate = true) {
  const date = dayjs(d).locale('pt-br')
  if (onlyDate || date.year() === dayjs().year()) return date.format('D MMMM')
  return date.format('D MMM, YYYY')
}