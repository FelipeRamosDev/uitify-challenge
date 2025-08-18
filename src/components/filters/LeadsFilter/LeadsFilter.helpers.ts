import type { LeadData } from "@/types/data.types";

export function searchFilter(leads: LeadData[], searchTerm: string) {
   return leads.filter(lead =>
      (lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()))
   );
}

export function filterStatus(leads: LeadData[], status: string) {
   return leads.filter(lead =>
      (status === 'all' || lead.status === status)
   );
}

export function filter(leads: LeadData[], searchTerm: string, status: string) {
   return searchFilter(filterStatus(leads, status), searchTerm);
}
