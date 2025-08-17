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

   const getRowKey = (item: object, index: number): string => {
      // Try common key properties first
      if ('id' in item && item.id != null) return String(item.id);
      if ('key' in item && item.key != null) return String(item.key);
      if ('uuid' in item && item.uuid != null) return String(item.uuid);
      
      // Fallback to a hash of the item's values
      return String(index) + JSON.stringify(item);
   };

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
               <tr key={getRowKey(item as object, index)}>
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
