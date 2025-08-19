import type { LeadData } from "@/types/data.types";

export interface LeadSlideOverProps {
   selectedLead: LeadData | undefined;
   setSelectedLead: (lead: LeadData | null) => void;
   editData: (id: number, fieldName: string, value: string) => void;
}
