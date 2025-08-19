import type { LeadData } from "@/types/data.types";

export function searchFilter(leads: LeadData[], searchTerm: string) {
   if (!searchTerm) return leads;

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

export function sortByScore(leads: LeadData[], order: 'asc' | 'desc') {
   return [...leads].sort((a, b) => {
      const scoreA = a.score || 0;
      const scoreB = b.score || 0;

      return order === 'asc' ? scoreA - scoreB : scoreB - scoreA;
   });
}

export function filter(leads: LeadData[], searchTerm: string, status: string, order: 'asc' | 'desc') {
   return sortByScore(searchFilter(filterStatus(leads, status), searchTerm), order);
}
