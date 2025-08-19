import type { LeadData } from "@/types/data.types";

export interface Opportunity {
   id: number;
   name: string;
   stage: string;
   amount?: number;
   accountName: string;
};

export interface OpportunitiesContextType {
   opportunities: Opportunity[];
   addOpportunity: (lead: LeadData) => void;
};
