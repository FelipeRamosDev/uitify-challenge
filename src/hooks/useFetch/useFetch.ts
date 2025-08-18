import { useEffect, useState } from 'react';
import type { FetchResponse } from './useFetch.types';

export default function useFetch<T>(url: string): FetchResponse<T> {
   const [data, setData] = useState<T>([] as T);
   const [error, setError] = useState<Error | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const TIMEOUT = 2000; // Simulate a delay for the fetch operation

   useEffect(() => {
      setTimeout(() => {
         import(url).then(response => {
            if (!response?.default) {
               setData([] as T);
               return;
            }
   
            setData(response.default);
         }).catch(error => {
            setError(error);
         }).finally(() => setLoading(false));
      }, TIMEOUT);
   }, [ url ]);

   return { data, error, loading };
}
