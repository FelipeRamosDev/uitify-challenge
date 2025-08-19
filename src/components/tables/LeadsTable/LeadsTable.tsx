import { Table } from '@/components/display';
import { LeadsFilter } from '@/components/filters';
import { useFetch } from '@/hooks';
import initialLeads from '@/assets/data/leads.json';
import { LeadSlideOver } from '@/components/tables/LeadsTable/subcomponents';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { leadStatus } from '@/app.config.json';

// types
import type { LeadData } from '@/types/data.types';

export default function LeadsTable(): React.JSX.Element {
   const storedOrder  = localStorage.getItem('sortOrder') as 'asc' | 'desc';

   const {
      defaultData,
      data = [],
      setData,
      editData,
      loading
   } = useFetch<LeadData>(initialLeads, 'score', storedOrder  || 'desc');

   const [selectedLead, setSelectedLead] = useState<LeadData | null>(null);
   const computedLead = data.find((item: LeadData) => item.id === selectedLead?.id);

   const handleRowClick = (item: LeadData) => {
      setSelectedLead(item);
   };

   const slideOverPortal = createPortal((
      <LeadSlideOver
         selectedLead={computedLead}
         setSelectedLead={setSelectedLead}
         editData={editData}
      />
   ), document.querySelector('main#root') as HTMLElement);

   return (
      <div>
         <LeadsFilter defaultData={defaultData} setData={setData} />

         <Table<LeadData>
            items={data}
            loading={loading}
            onRowClick={handleRowClick}
            columns={[
               { key: 'id', label: 'ID' },
               { key: 'name', label: 'Name' },
               { key: 'company', label: 'Company' },
               { key: 'email', label: 'Email' },
               { key: 'source', label: 'Source' },
               { key: 'score', label: 'Score' },
               {
                  key: 'status',
                  label: 'Status',
                  format: (value: string | number) => leadStatus[String(value) as keyof typeof leadStatus]
               }
            ]}
         />

         {slideOverPortal}
      </div>
   );
}
