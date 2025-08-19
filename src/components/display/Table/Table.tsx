import { parseCSS } from '@/helpers/parse';
import styles from './Table.module.css';

// types
import type { JSX } from 'react';
import type { TableProps } from './Table.types';

export default function Table<Item>({
   items = [],
   columns = [],
   loading,
   error,
   onRowClick,
   className
}: TableProps<Item>): JSX.Element {
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

   if (loading || error) {
      return (
         <div className="bg-primary-100 mt-5 rounded-sm py-20">
            {loading && <p className={parseCSS(styles.fallback, ['text-center'])}>Loading...</p>}
            {error && <p className={parseCSS(styles.fallback, ['text-center'])}>Failed to load data</p>}
         </div>
      );
   }

   return (
      <div className="overflow-x-auto lg:overflow-x-visible">
         {items.length > 0 && (
            <table className={classes}>
               <thead>
                  <tr>
                     {columns.map((column) => (
                        <th key={String(column.key)}>
                           {column.label}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {items.map((item: Item, index) => (
                     <tr
                        key={getRowKey(item as object, index)}
                        onClick={() => onRowClick?.(item)}
                        className={onRowClick ? styles.clickable : undefined}
                     >
                        {columns.map((column) => (
                           <td key={String(column.key)}>
                              {(typeof column.format === 'function')
                                 ? column.format(item[column.key], item)
                                 : String(item[column.key] ?? '')
                              }
                           </td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
         {items.length === 0 && (
            <div className="bg-primary-200 p-3 my-2 rounded-sm">
               <p className="text-center">No data available</p>
            </div>
         )}
      </div>
   );
}
