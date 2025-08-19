import type { SelectInputOption } from '@/components/inputs/SelectInput/SelectInput.types';
import type { LeadData } from '@/types/data.types';

export interface DataViewProps {
   edit?: LeadData | null;
   fieldName?: string;
   label: string;
   value: string | React.ReactNode;
   editInput?: string;
   validations?: ValidationConfig[];
   selectOptions?: SelectInputOption[];
   handleEdit?: (id: number, fieldName: string, value: string) => void;
}

export interface ValidationConfig {
   errorMessage: string;
   validator: (value: LeadData[keyof LeadData]) => boolean;
}
