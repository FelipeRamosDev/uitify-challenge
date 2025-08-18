import { parseCSS } from '@/helpers/parse';
import styles from './TextInput.module.css';

// types
import type { TextInputProps } from './TextInput.types';

export default function TextInput({ id, label, type = 'text', className, minWidth, ...props }: TextInputProps): React.JSX.Element {
   const inputClasses = [];
   const wrapProps = { style: {} };
   const classes = parseCSS(className, [
      styles.TextInput
   ]);

   if (label) {
      inputClasses.push(styles.hasLabel);
   }

   if (minWidth) {
      wrapProps.style = { minWidth, ...props.style };
   }

   return (
      <fieldset className={classes} {...wrapProps}>
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
