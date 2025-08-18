import { Table } from '@/components/display';
import { LeadsFilter } from '@/components/filters';
import { useFetch } from '@/hooks';

// types
import type { LeadData } from '@/types/data.types';

export default function LeadsTable(): React.JSX.Element {
   const { defaultData, data = [], setData, error, loading } = useFetch<LeadData[]>('../../assets/data/leads.json');

   return (
      <div>
         <LeadsFilter defaultData={defaultData} setData={setData} />

         <Table<LeadData>
            items={data}
            loading={loading}
            error={error}
            columns={[
               { key: 'id', label: 'ID' },
               { key: 'name', label: 'Name' },
               { key: 'company', label: 'Company' },
               { key: 'email', label: 'Email' },
               { key: 'status', label: 'Status' },
               { key: 'source', label: 'Source' },
               { key: 'score', label: 'Score' },
            ]}
         />
      </div>
   );
}
