export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   errors?: string[];
   minWidth?: string;
}
