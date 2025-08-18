export interface FetchResponse<T> {
   data: T;
   error: Error | null;
   loading: boolean;
}
