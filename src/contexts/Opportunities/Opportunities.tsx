import { useState } from 'react';
import { OpportunitiesContext } from './OpportunitiesContext';
import type { LeadData, OpportunityData } from '@/types/data.types';

export default function OpportunitiesProvider({ children }: { children: React.ReactNode }) {
   const [opportunities, setOpportunities] = useState<OpportunityData[]>([]);

   const addOpportunity = (lead: LeadData) => {
      if (!lead) return;

      if (opportunities.some(opportunity => opportunity.accountName === lead.company)) {
         // Prevent to duplicate opportunitiy
         return;
      }

      setOpportunities((prev) => [
         ...prev,
         {
            id: prev.length + 1,
            name: lead.name,
            stage: 'new',
            amount: 0,
            accountName: lead.company
         }
      ]);
   };

   return (
      <OpportunitiesContext.Provider value={{ opportunities, addOpportunity }}>
         {children}
      </OpportunitiesContext.Provider>
   );
};
