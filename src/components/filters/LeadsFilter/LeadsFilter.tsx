import { parseCSS } from '@/helpers/parse';
import { SelectInput, TextInput } from '@/components/inputs';
import { useEffect, useState } from 'react';
import { leadStatus, sortOptions } from '@/app.config.json';

// types
import type { LeadsFilterProps } from './LeadsFilter.types';
import { filter, filterStatus, searchFilter } from './LeadsFilter.helpers';

export default function LeadsFilter({ className, defaultData = [], setData }: LeadsFilterProps): React.JSX.Element {
   const [searchInput, setSearchInput] = useState<string>('');
   const [statusFilter, setStatusFilter] = useState<string>(localStorage.getItem('filterStatus') || 'all');
   const [sortOrder, setSortOrder] = useState<string>(localStorage.getItem('sortOrder') || 'desc');
   const selectOptions = Object.entries(leadStatus).map(([key, value]) => ({
      value: key,
      label: value
   }));

   const sortOptionsList = Object.entries(sortOptions).map(([key, value]) => ({
      value: key,
      label: value
   }));

   const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const currentValue = ev.target.value;
      setSearchInput(currentValue);

      if (!currentValue) {
         const statusFiltered = filterStatus(defaultData, statusFilter);
         setData(statusFiltered);
         return;
      }

      const filtered = filter(defaultData, currentValue, statusFilter, sortOrder as 'asc' | 'desc');
      setData(filtered);
   }

   const handleStatusChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
      const currentValue = ev.target.value;
      setStatusFilter(currentValue);

      localStorage.setItem('filterStatus', currentValue);
      if (currentValue === 'all') {
         const searchResult = searchFilter(defaultData, searchInput);
         setData(searchResult);
         return;
      }

      const filtered = filter(defaultData, searchInput, currentValue, sortOrder as 'asc' | 'desc');
      setData(filtered);
   };

   const handleSort = (ev: React.ChangeEvent<HTMLSelectElement>) => {
      const currentValue = ev.target.value;
      setSortOrder(currentValue);

      localStorage.setItem('sortOrder', currentValue);
      const sortedData = filter(defaultData, searchInput, statusFilter, currentValue as 'asc' | 'desc');
      setData(sortedData);
   }

   useEffect(() => {
      const filtered = filter(defaultData, searchInput, statusFilter, sortOrder as 'asc' | 'desc');
      setData(filtered);
   }, [defaultData, searchInput, statusFilter, sortOrder, setData]);

   return (
      <div
         className={parseCSS(className, [
            'flex',
            'justify-end',
            'flex-col',
            'md:flex-row',
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
            options={selectOptions}
         />

         <SelectInput
            title="Sort by Score"
            label="Sort by Score"
            minWidth="150px"
            value={sortOrder}
            onChange={handleSort}
            options={sortOptionsList}
         />
      </div>
   );
}
