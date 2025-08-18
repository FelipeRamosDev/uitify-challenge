export interface SelectInputProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
   title: string;
   label?: string;
   minWidth?: string;
   options: SelectInputOption[];
}

export interface SelectInputOption {
   value: string;
   label: string;
}
