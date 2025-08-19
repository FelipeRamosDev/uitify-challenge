import { Button } from '@/components/buttons';
import { PageHeader } from '@/components/headers';
import { Container } from '@/components/layout';
import { LeadsTable, OpportunitiesTable } from '@/components/tables';
import { OpportunitiesProvider } from '@/contexts';
import { useState } from 'react';

export default function Home(): React.JSX.Element {
   const [ showOpportunities, setShowOpportunities ] = useState<boolean>(false);

   return (
      <OpportunitiesProvider>
         <div className="Home">
            <PageHeader
               title="Leads Conversion"
               description="Optimize your sales funnel and boost conversions with our powerful tools."
            >
               <Button title="Show Opportunities" onClick={() => setShowOpportunities(!showOpportunities)}>
                  Opportunities
               </Button>
            </PageHeader>

            <Container>
               {showOpportunities && <OpportunitiesTable />}
               <LeadsTable />
            </Container>
         </div>
      </OpportunitiesProvider>
   );
}
