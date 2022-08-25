export const roundToX = (num: number, decimals: number) => {
  //@ts-ignore
  return +(Math.round(num + "e" + decimals) + "e-" + decimals);
};
