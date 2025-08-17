import { parseCSS } from '@/helpers/parse';
import styles from './Table.module.css';

// types
import type { JSX } from 'react';
import type { TableProps } from './Table.types';

export default function Table<Item>({ items = [], columns = [], className }: TableProps<Item>): JSX.Element {
   const classes = parseCSS(className, [
      styles.Table,
      'table-auto',
      'rounded-sm',
      'overflow-hidden',
      'my-2'
   ]);

   return (
      <table className={classes}>
         <thead>
            <tr>
               {columns.map((column) => (
                  <th key={String(column.id)}>
                     {column.label}
                  </th>
               ))}
            </tr>
         </thead>
         <tbody>
            {items.map((item: Item, index) => (
               <tr key={index}>
                  {columns.map((column) => (
                     <td key={String(column.id)}>
                        {(typeof column.format === 'function')
                           ? column.format(item[column.id], item) 
                           : String(item[column.id] ?? '')
                        }
                     </td>
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   );
}
