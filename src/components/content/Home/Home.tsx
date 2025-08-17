import { Table } from '@/components/display';
import { PageHeader } from '@/components/headers';
import { Container } from '@/components/layout';

export default function Home(): React.JSX.Element {
   return (
      <div className="Home">
         <PageHeader
            title="Leads Conversion"
            description="Optimize your sales funnel and boost conversions with our powerful tools."
         />

         <Container>
            <Table<{id: number, name: string; email: string; status: string}>
               columns={[
                  { id: 'id', label: 'ID' },
                  { id: 'name', label: 'Name' },
                  { id: 'email', label: 'Email' },
                  { id: 'status', label: 'Status' },
               ]}
               items={[
                  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
                  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
                  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Pending' },
               ]}
            />
         </Container>
      </div>
   );
}
