import type { ComponentBaseProps } from "@/types/base.types";

export interface TableProps<T> extends ComponentBaseProps {
   items: T[];
   columns: TableColumn<T>[];
}

export interface TableColumn<T> {
   id: keyof T;
   label: string;
   minWidth?: number;
   format?: (value: T[keyof T], item: T) => React.ReactNode;
}
