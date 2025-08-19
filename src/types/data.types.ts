export interface LeadData {
   id: number;
   name: string;
   company: string;
   email: string;
   source: string;
   score: number;
   status: string;
}

export interface OpportunityData {
   id: number;
   name: string;
   stage: string;
   amount?: number;
   accountName: string;
};

