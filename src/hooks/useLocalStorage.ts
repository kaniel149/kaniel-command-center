import { useState, useEffect, useCallback } from 'react';

const KEY_PREFIX = 'kaniel-cc-';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const prefixedKey = `${KEY_PREFIX}${key}`;

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(prefixedKey);
      if (item !== null) {
        return JSON.parse(item) as T;
      }
      return initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${prefixedKey}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const nextValue = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(prefixedKey, JSON.stringify(nextValue));
        } catch (error) {
          console.warn(`Error writing localStorage key "${prefixedKey}":`, error);
        }
        return nextValue;
      });
    },
    [prefixedKey]
  );

  // Sync across tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === prefixedKey && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue) as T);
        } catch (error) {
          console.warn(`Error parsing storage event for "${prefixedKey}":`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [prefixedKey]);

  return [storedValue, setValue];
}
