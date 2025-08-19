import { useEffect, useRef, useState } from 'react';

// types
import type { FetchResponse } from './useFetch.types';

export default function useFetch<T>(initialData: T[], sortBy?: string, sortOrder: 'asc' | 'desc' = 'asc'): FetchResponse<T> {
   const [data, setData] = useState<T[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<Error | null>(null);
   const defaultData = useRef<T[]>([]);
   const TIMEOUT = 2000; // Simulate a delay for the fetch operation

   const editData = (id: number, fieldName: string, value: string) => {
      const newValue = defaultData.current.map((item: T) => {
         if ((item as { id: number }).id === id) {
            return {
               ...item,
               [fieldName]: value
            };
         }

         return item;
      });

      defaultData.current = newValue;
      setData(newValue);
   }

   useEffect(() => {
      setLoading(true);

      setTimeout(() => {
         if (!initialData) {
            setData([]);
            return;
         }

         try {
            if (sortBy) {
               defaultData.current = initialData.sort((a: T, b: T) => {
                  const aValue = a[sortBy as keyof T];
                  const bValue = b[sortBy as keyof T];
   
                  if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
                  if (aValue > bValue) return sortOrder === 'desc' ? 1 : -1;
   
                  return 0;
               });
            } else {
               defaultData.current = initialData;
            }
   
            setData(defaultData.current);
            setLoading(false);
         } catch (error) {
            setError(error as Error);
         }
      }, TIMEOUT);
   }, [initialData, sortBy, sortOrder]);

   return {
      defaultData: defaultData.current,
      data,
      setData,
      editData,
      error,
      loading
   };
}
