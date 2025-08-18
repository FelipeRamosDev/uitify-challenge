import { parseCSS } from '@/helpers/parse';
import { SelectInput, TextInput } from '@/components/inputs';
import { useState } from 'react';

// types
import type { LeadsFilterProps } from './LeadsFilter.types';
import { filter, filterStatus, searchFilter } from './LeadsFilter.helpers';

export default function LeadsFilter({ className, defaultData = [], setData }: LeadsFilterProps): React.JSX.Element {
   const [searchInput, setSearchInput] = useState<string>('');
   const [statusFilter, setStatusFilter] = useState<string>('all');

   const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const currentValue = ev.target.value;
      setSearchInput(currentValue);

      if (!currentValue) {
         const statusFiltered = filterStatus(defaultData, statusFilter);
         setData(statusFiltered);
         return;
      }

      const filtered = filter(defaultData, currentValue, statusFilter);
      setData(filtered);
   }

   const handleStatusChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
      const currentValue = ev.target.value;
      setStatusFilter(currentValue);

      if (currentValue === 'all') {
         const searchResult = searchFilter(defaultData, searchInput);
         setData(searchResult);
         return;
      }

      const filtered = filter(defaultData, searchInput, currentValue);
      setData(filtered);
   };

   return (
      <div
         className={parseCSS(className, [
            'flex',
            'justify-end',
            'gap-4',
            'bg-primary-800',
            'rounded-sm',
            'p-4',
            'text-primary-100'
         ])}
      >
         <TextInput
            label="Search Leads"
            placeholder="Search..."
            minWidth="30%"
            value={searchInput}
            onChange={handleSearch}
         />

         <SelectInput
            title="Filter by Status"
            label="Filter by Status"
            minWidth="200px"
            value={statusFilter}
            onChange={handleStatusChange}
            options={[
               { value: 'all', label: 'All' },
               { value: 'new', label: 'New' },
               { value: 'closed', label: 'Closed' },
            ]}
         />
      </div>
   );
}
