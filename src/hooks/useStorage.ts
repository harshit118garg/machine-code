import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, window.localStorage);
}

export function useSessionStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, window.sessionStorage);
}

function useStorage<T>(
  key: string,
  initialValue: T | (() => T),
  storageLocation: Storage
) {
  const [data, setData] = useState<T>(() => {
    const jsonValue = storageLocation.getItem(key);

    if (jsonValue === null) {
      if (typeof initialValue === "function") {
        return (initialValue as () => T)();
      } else {
        return initialValue;
      }
    } else {
      return JSON.parse(jsonValue);
    }
  });

  useEffect(() => {
    storageLocation.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData] as [T, typeof setData];
}
