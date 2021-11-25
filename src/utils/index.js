// this function is used to clean the keys with empty value, but we should not change the source object
export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    // we want to check if value is null/false
    //     if (!value) { we want to delete the value when the value is null or undefined
    //but using "!value" ignores the case that the value is "0", so we need to define a function to check whether it is null/undefined
    //       delete result[key];
    //     }
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
