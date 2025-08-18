export interface FetchResponse<T> {
   data: T;
   defaultData: T;
   setData: React.Dispatch<React.SetStateAction<T>>;
   error: Error | null;
   loading: boolean;
}
