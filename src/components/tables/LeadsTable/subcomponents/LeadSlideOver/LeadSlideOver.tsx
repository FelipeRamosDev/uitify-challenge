import { Button } from '@/components/buttons';
import { DataView, SlideOver } from '@/components/display';
import { leadStatus } from '@/app.config.json';
import { useOpportunities } from '@/contexts';

// types
import type { LeadSlideOverProps } from './LeadSlideOver.types';
import type { LeadData } from '@/types/data.types';

export default function LeadSlideOver({ selectedLead, setSelectedLead, editData }: LeadSlideOverProps) {
   const { addOpportunity } = useOpportunities();
   const isOpportunity = selectedLead?.status === 'opportunity';
   const selectOptions = Object.entries(leadStatus).map(([key, value]) => ({
      value: key,
      label: value
   }));

   if (!selectedLead) {
      return null;
   }

   const convertLead = () => {
      addOpportunity(selectedLead);
      editData(selectedLead.id, 'status', 'opportunity');
      setSelectedLead(null);
   }

   return (
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
            <DataView label="Source" value={selectedLead?.source} />
            <DataView label="Score" value={selectedLead?.score} />

            <DataView
               label="Email"
               value={selectedLead?.email}
               edit={selectedLead}
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
               value={leadStatus[selectedLead?.status as keyof typeof leadStatus]}
               edit={selectedLead}
               fieldName="status"
               handleEdit={editData}
               editInput="SelectInput"
               selectOptions={selectOptions}
            />

            <Button
               title="Convert this lead to a customer"
               onClick={convertLead}
               disabled={isOpportunity}
            >
               {!isOpportunity ? 'Convert Lead' : 'Lead Converted'}
            </Button>
         </div>
      </SlideOver>
   )
}