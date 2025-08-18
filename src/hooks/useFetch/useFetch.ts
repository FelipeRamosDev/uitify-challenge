import { useEffect, useRef, useState } from 'react';

// types
import type { FetchResponse } from './useFetch.types';

export default function useFetch<T>(url: string, sortBy?: string, sortOrder: 'asc' | 'desc' = 'asc'): FetchResponse<T> {
   const [data, setData] = useState<T>([] as T);
   const [error, setError] = useState<Error | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const defaultData = useRef<T>([] as T);
   const TIMEOUT = 2000; // Simulate a delay for the fetch operation

   useEffect(() => {
      setTimeout(() => {
         import(url).then(response => {
            if (!response?.default) {
               setData([] as T);
               return;
            }

            if (sortBy) {
               defaultData.current = response.default.sort((a: T, b: T) => {
                  const aValue = a[sortBy as keyof T];
                  const bValue = b[sortBy as keyof T];

                  if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
                  if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;

                  return 0;
               });
            } else {
               defaultData.current = response.default;
            }

            setData(defaultData.current);
         }).catch(error => {
            setError(error);
         }).finally(() => setLoading(false));
      }, TIMEOUT);
   }, [url, sortBy, sortOrder]);

   return { defaultData: defaultData.current, data, setData, error, loading };
}
