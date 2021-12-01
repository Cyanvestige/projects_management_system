import { useEffect, useState } from "react";

// this function is used to clean the keys with empty value, but we should not change the source object
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    // we want to check if value is null/false
    //     if (!value) { we want to delete the value when the value is null or undefined
    //but using "!value" ignores the case that the value is "0", so we need to define a function to check whether it is null/undefined
    //       delete result[key];
    //     }
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// export const debounce = (func, delay) => {
//   let timeout;
//   return () => {
//     if (timeout) clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func();
//     }, delay);
//   };
// };
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

export const useArray = <T>(array: T[]) => {
  const [value, setValue] = useState(array);
  // const clear = ;
  // const removeIndex = (index: number) => {
  //   setValue(value.filter((v, inx) => inx != index));
  // };
  // const add = (ele: V) => {
  //   value.push(ele);
  // };
  // useEffect(() => {
  //   setValue(value);
  // }, []);
  return {
    value,
    setValue,
    add: (ele: T) => setValue([...value, ele]),
    clear: () => setValue([]),
    removeIndex: (index: number) =>
      setValue(value.filter((v, inx) => inx != index)),
  };
};
