import { useEffect, useState } from 'react';
import type { FetchResponse } from './useFetch.types';

export default function useFetch<T>(url: string): FetchResponse<T> {
   const [data, setData] = useState<T>([] as T);
   const [error, setError] = useState<Error | null>(null);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      setTimeout(() => {
         import(url).then(async response => {
            if (!response?.default) {
               setData([] as T);
            }
   
            setData(response.default);
         }).catch(error => {
            setError(error);
         }).finally(() => setLoading(false));
      }, 2000);
   }, [ url ]);

   return { data, error, loading };
}
