import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, typeof setValue] {
  const [value, setValue] = useState<T>(() => {
    const previousValue = localStorage.getItem(key);

    if (previousValue == null) {
      return initialValue;
    }

    return JSON.parse(previousValue);
  });

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return [value, setValue];
}
