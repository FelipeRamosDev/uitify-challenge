import type { LeadData } from "@/types/data.types";

export interface DataViewProps {
   edit?: LeadData | null;
   fieldName?: string;
   label: string;
   value: string | React.ReactNode;
   Input?: React.JSX.Element;
   handleEdit?: (id: number, fieldName: string, value: string) => void;
   validations?: ValidationConfig[];
}

export interface ValidationConfig {
   errorMessage: string;
   validator: (value: LeadData[keyof LeadData]) => boolean;
}
