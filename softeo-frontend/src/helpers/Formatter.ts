const zeroLeftFormatter = (num: number): string => {
  return num <= 9 ? `0${num}` : `${num}`
}

export const stringDateFormatter = (stringDate: string): string => {
  const date = new Date(stringDate)
  const day = zeroLeftFormatter(date.getDate())
  const month = zeroLeftFormatter(date.getMonth() + 1)
  const year = zeroLeftFormatter(date.getFullYear())
  return `${day}/${month}/${year}`
}

export const valueFormatter = (value: number): string => {
  const options = { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }
  const formatNumber = new Intl.NumberFormat('pt-BR', options)
  return formatNumber.format(value)
}
