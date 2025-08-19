import { createContext, useContext, useState } from 'react';
import type { OpportunitiesContextType, Opportunity } from './Opportunities.types';
import type { LeadData } from '@/types/data.types';

const OpportunitiesContext = createContext<OpportunitiesContextType | undefined>(undefined);

export const OpportunitiesProvider = ({ children }: { children: React.ReactNode }) => {
   const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

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

export const useOpportunities = () => {
   const context = useContext(OpportunitiesContext);

   if (!context) {
      throw new Error('useOpportunities must be used within an OpportunitiesProvider');
   }

   return context;
};
