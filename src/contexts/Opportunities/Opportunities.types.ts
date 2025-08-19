import type { LeadData, OpportunityData } from '@/types/data.types';

export interface OpportunitiesContextType {
   opportunities: OpportunityData[];
   addOpportunity: (lead: LeadData) => void;
};
