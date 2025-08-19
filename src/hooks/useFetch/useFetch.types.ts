export interface FetchResponse<T> {
   data: T[];
   defaultData: T[];
   setData: React.Dispatch<React.SetStateAction<T[]>>;
   editData: (id: number, fieldName: string, value: string) => void;
   loading: boolean;
   error: Error | null;
}
