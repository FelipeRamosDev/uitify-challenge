import { createContext } from 'react';
import type { OpportunitiesContextType } from './Opportunities.types';

export const OpportunitiesContext = createContext<OpportunitiesContextType | undefined>(undefined);
