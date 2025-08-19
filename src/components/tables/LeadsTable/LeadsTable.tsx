import { SlideOver, Table } from '@/components/display';
import DataView from '@/components/display/DataView/DataView';
import { LeadsFilter } from '@/components/filters';
import { useFetch } from '@/hooks';
import initialLeads from '@/assets/data/leads.json';

// types
import type { LeadData } from '@/types/data.types';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '@/components/buttons/Button/Button';

export default function LeadsTable(): React.JSX.Element {
   const {
      defaultData,
      data = [],
      setData,
      editData,
      loading
   } = useFetch<LeadData>(initialLeads, 'score', 'desc');

   const [selectedLead, setSelectedLead] = useState<LeadData | null>(null);
   const computedLead = data.find((item: LeadData) => item.id === selectedLead?.id);

   const handleRowClick = (item: LeadData) => {
      setSelectedLead(item);
   };

   const slideOverPortal = createPortal((
      <SlideOver
         isOpen={Boolean(selectedLead)}
         onClose={() => setSelectedLead(null)}
      >
         <div className="slide-header mb-2">
            <h2 className="text-lg">Lead Details</h2>
            <p className="text-sm">Here you can view and edit lead information.</p>
         </div>

         <div className="slideBody">
            <DataView label="ID" value={computedLead?.id} />
            <DataView label="Name" value={computedLead?.name} />
            <DataView label="Company" value={computedLead?.company} />
            <DataView label="Source" value={computedLead?.source} />
            <DataView label="Score" value={computedLead?.score} />
            <DataView
               label="Email"
               value={computedLead?.email}
               edit={computedLead}
               fieldName="email"
               handleEdit={editData}
               validations={[
                  {
                     errorMessage: 'Invalid email format',
                     validator: (value: LeadData[keyof LeadData]) => {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        return typeof value === 'string' && emailRegex.test(value);
                     }
                  }
               ]}
            />
            <DataView
               label="Status"
               value={computedLead?.status}
               edit={computedLead}
               fieldName="status"
               handleEdit={editData}
               editInput="SelectInput"
               selectOptions={[
                  { value: 'all', label: 'All' },
                  { value: 'new', label: 'New' },
                  { value: 'closed', label: 'Closed' },
               ]}
            />

            <Button title="Convert this lead to a customer">Convert Lead</Button>
         </div>
      </SlideOver>
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
               { key: 'status', label: 'Status' },
               { key: 'source', label: 'Source' },
               { key: 'score', label: 'Score' },
            ]}
         />

         {slideOverPortal}
      </div>
   );
}
