import { parseCSS } from '@/helpers/parse';
import styles from './TextInput.module.css';

// types
import type { TextInputProps } from './TextInput.types';

export default function TextInput({ id, label, type = 'text', className, ...props }: TextInputProps): React.JSX.Element {
   const inputClasses = [];
   const classes = parseCSS(className, [
      styles.TextInput
   ]);

   if (label) {
      inputClasses.push(styles.hasLabel);
   }

   return (
      <fieldset className={classes}>
         {label && <label htmlFor={id}>{label}</label>}

         <input
            id={id}
            type={type}
            className={parseCSS(inputClasses)}
            {...props}
         />
      </fieldset>
   );
}
