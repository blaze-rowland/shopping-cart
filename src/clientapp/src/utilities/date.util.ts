//type DateFormat = 'MM/DD/YYYY';
export enum DateFormat {
  MMDDYYYY = 'MM/DD/YYYY',
}

export const formatDate = (date: Date | string, format: DateFormat): string => {
  switch (format) {
    case DateFormat.MMDDYYYY:
      if (typeof date === 'string') date = new Date(date);
      return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
  }
};
