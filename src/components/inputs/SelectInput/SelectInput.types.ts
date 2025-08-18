import type { ComponentBaseProps } from "@/types/base.types";

export interface SelectInputProps extends ComponentBaseProps {
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
