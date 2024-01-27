export const getInNumberFormat = (value: string | string[]) => {
  return parseInt(typeof value === "string" ? value : value[0]);
};
