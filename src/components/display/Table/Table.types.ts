import type { ComponentBaseProps } from "@/types/base.types";

export interface TableProps<T> extends ComponentBaseProps {
   items: T[];
   columns: TableColumn<T>[];
   loading?: boolean;
   error?: Error | null;
   onRowClick?: (item: T) => void;
}

export interface TableColumn<T> {
   key: keyof T;
   label: string;
   minWidth?: number;
   format?: (value: T[keyof T], item: T) => React.ReactNode;
}
