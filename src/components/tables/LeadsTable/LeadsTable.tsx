import { SlideOver, Table } from '@/components/display';
import DataView from '@/components/display/DataView/DataView';
import { LeadsFilter } from '@/components/filters';
import { useFetch } from '@/hooks';

// types
import type { LeadData } from '@/types/data.types';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function LeadsTable(): React.JSX.Element {
   const {
      defaultData,
      data = [],
      setData,
      error,
      loading
   } = useFetch<LeadData[]>('../../assets/data/leads.json', 'score', 'desc');
   const [ selectedLead, setSelectedLead ] = useState<LeadData | null>(null);

   const handleRowClick = (item: LeadData) => {
      setSelectedLead(item);
   };

   return (
      <div>
         <LeadsFilter defaultData={defaultData} setData={setData} />

         <Table<LeadData>
            items={data}
            loading={loading}
            error={error}
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

         {createPortal((
            <SlideOver
               isOpen={Boolean(selectedLead)}
               onClose={() => setSelectedLead(null)}
            >
               <div className="slide-header mb-2">
                  <h2 className="text-lg">Lead Details</h2>
                  <p className="text-sm">Here you can view and edit lead information.</p>
               </div>

               <div className="slideBody">
                  <DataView label="ID" value={selectedLead?.id} />
                  <DataView label="Name" value={selectedLead?.name} />
                  <DataView label="Company" value={selectedLead?.company} />
                  <DataView label="Email" value={selectedLead?.email} />
                  <DataView label="Status" value={selectedLead?.status} />
                  <DataView label="Source" value={selectedLead?.source} />
                  <DataView label="Score" value={selectedLead?.score} />
               </div>
            </SlideOver>
         ), document.querySelector('main#root') as HTMLElement)}
      </div>
   );
}
