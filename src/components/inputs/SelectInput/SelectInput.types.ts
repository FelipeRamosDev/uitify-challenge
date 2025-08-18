import type { ComponentBaseProps } from "@/types/base.types";

export interface SelectInputProps extends Omit<ComponentBaseProps, 'onClick'> {
   title: string;
   label?: string;
   minWidth?: string;
   value: string;
   onChange?: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
   style?: React.CSSProperties;
   options: SelectInputOption[];
}

export interface SelectInputOption {
   value: string;
   label: string;
}
