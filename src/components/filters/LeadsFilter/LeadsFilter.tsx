import { parseCSS } from '@/helpers/parse';
import { SelectInput, TextInput } from '@/components/inputs';
import { useState } from 'react';

// types
import type { LeadsFilterProps } from './LeadsFilter.types';

export default function LeadsFilter({ className, defaultData = [], setData }: LeadsFilterProps): React.JSX.Element {
   const [ searchInput, setSearchInput ] = useState<string>('');

   const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const currentValue = ev.target.value;
      setSearchInput(currentValue);

      if (!currentValue) {
         setData(defaultData);
         return;
      }

      const filtered = defaultData.filter(lead =>
         lead.name.toLowerCase().includes(currentValue.toLowerCase()) ||
         lead.company.toLowerCase().includes(currentValue.toLowerCase())
      );

      setData(filtered);
   }

   return (
      <fieldset className={parseCSS(className, "flex gap-4  bg-primary-800 rounded-sm p-4 text-primary-100")}>
         <TextInput
            label="Search Leads"
            placeholder="Search..."
            value={searchInput}
            onChange={handleSearch}
         />

         <SelectInput
            title="Filter by Status"
            label="Filter by Status"
            minWidth="200px"
            options={[
               { value: 'all', label: 'All' },
               { value: 'new', label: 'New' },
               { value: 'closed', label: 'Closed' },
            ]}
         />
      </fieldset>
   );
}
