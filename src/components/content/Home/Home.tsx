import { PageHeader } from '@/components/headers';
import { Container } from '@/components/layout';
import { LeadsTable } from '@/components/tables';
import { OpportunitiesProvider } from '@/contexts';

export default function Home(): React.JSX.Element {
   return (
      <OpportunitiesProvider>
         <div className="Home">
            <PageHeader
               title="Leads Conversion"
               description="Optimize your sales funnel and boost conversions with our powerful tools."
            />

            <Container>
               <LeadsTable />
            </Container>
         </div>
      </OpportunitiesProvider>
   );
}
