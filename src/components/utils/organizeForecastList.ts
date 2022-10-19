function organizeForecastList(time: number, list: any) {
  const date = new Date(time * 1000);
  const day = date.getDate();

  const day1 = list.filter((val: any) => {
    return Number(val.dt_txt.slice(8, 10)) === day + 1
  })
  const day2 = list.filter((val: any) => {
    return Number(val.dt_txt.slice(8, 10)) === day + 2
  })
  const day3 = list.filter((val: any) => {
    return Number(val.dt_txt.slice(8, 10)) === day + 3
  })
  const day4 = list.filter((val: any) => {
    return Number(val.dt_txt.slice(8, 10)) === day + 4
  })

  const finalArr = [day1, day2, day3, day4];

  return finalArr
};

export default organizeForecastList