export type BooleanString = 'true' | 'false';

export const parseBoolean = (value: BooleanString): boolean => {
  return value === 'true' ? true : false;
};

export const checkValidity = <T>(values: T): boolean => {
  let isValid = true;
  Object.values(values).forEach((x: any) => {
    if (typeof x === 'string') {
      if (x.trim() === '') isValid = false;
    }

    if (typeof x === 'number') {
      if (isNaN(x)) isValid = false;
    }

    if (x === undefined) isValid = false;

    if (x === null) isValid = false;
  });

  return isValid;
};
