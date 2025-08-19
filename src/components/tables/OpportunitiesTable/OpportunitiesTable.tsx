import { Table } from '@/components/display';
import { useOpportunities } from '@/contexts';
import type { OpportunityData } from '@/types/data.types';

export default function OpportunitiesTable(): React.JSX.Element {
   const { opportunities } = useOpportunities();

   return (
      <Table<OpportunityData>
         items={opportunities}
         columns={[
            { key: 'id', label: 'ID' },
            { key: 'name', label: 'Name' },
            { key: 'stage', label: 'Stage' },
            { key: 'amount', label: 'Amount' },
            { key: 'accountName', label: 'Account Name' }
         ]}
      />
   );
}
