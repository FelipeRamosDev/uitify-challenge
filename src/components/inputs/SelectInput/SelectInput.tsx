import { parseCSS } from '@/helpers/parse';
import styles from './SelectInput.module.css';

// types
import type { SelectInputProps } from './SelectInput.types';
import type { CSSProperties } from 'react';

export default function SelectInput({ className, title, label, options, minWidth, ...props }: SelectInputProps) {
   const wrapClass = [styles.SelectInput];
   const wrapStyles: CSSProperties = {};
   const selectClass = [];

   if (minWidth) {
      wrapStyles.minWidth = minWidth;
   }

   if (label) {
      selectClass.push(styles.hasLabel);
   }

   props = { ...props, style: { ...props.style, ...wrapStyles } };
   return (
      <fieldset className={parseCSS(className, wrapClass)} {...props}>
         {label && <label>{label}</label>}

         <select title={title} className={parseCSS(selectClass)}>
            {options.map((option) => (
               <option key={option.value} value={option.value}>
                  {option.label}
               </option>
            ))}
         </select>
      </fieldset>
   );
}
