export enum TruncateValues {
  small = 25,
  default = 50,
  large = 75,
  extraLarge = 150,
}
export const truncate = (
  str: string,
  length: TruncateValues = 50,
  ellipses = true
): string => {
  return `${str.slice(0, length)}${
    ellipses && str.length > length ? '...' : ''
  }`;
};
