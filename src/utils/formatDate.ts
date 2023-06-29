import _ from "lodash";

export const formatDate = (date: string) => {
  const template = _.template("<%= day %>/<%= month %>/<%= year %>");
  const formattedDate = template({
    day: date.substring(8),
    month: date.substring(5, 7),
    year: date.substring(0, 4)
  });
  return formattedDate
}
