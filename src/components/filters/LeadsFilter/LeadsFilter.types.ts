import type { ComponentBaseProps } from '@/types/base.types';
import type { LeadData } from '@/types/data.types';

export interface LeadsFilterProps extends ComponentBaseProps {
   defaultData: LeadData[];
   setData: React.Dispatch<React.SetStateAction<LeadData[]>>;
}
