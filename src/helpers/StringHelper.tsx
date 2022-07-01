export const getBoolean = (value: string | null) => {
  let compareValue = value?.toLowerCase();
  if (
    compareValue === 'true' ||
    compareValue === '1' ||
    compareValue === 'y' ||
    compareValue === 'yes'
  ) {
    return true;
  }

  return false;
};
