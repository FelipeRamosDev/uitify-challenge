import ClosedEyeIcon from '@/assets/icons/ClosedEyeIcon';
import EyeIcon from '@/assets/icons/EyeIcon';
import { Button } from '@/components/buttons';
import { PageHeader } from '@/components/headers';
import { Container } from '@/components/layout';
import { LeadsTable, OpportunitiesTable } from '@/components/tables';
import { OpportunitiesProvider } from '@/contexts';
import { useState } from 'react';

export default function Home(): React.JSX.Element {
   const [showOpportunities, setShowOpportunities] = useState<boolean>(false);

   return (
      <OpportunitiesProvider>
         <div className="Home">
            <PageHeader title="Leads Conversion">
               <Button title="Show Opportunities" onClick={() => setShowOpportunities(!showOpportunities)}>
                  {showOpportunities ? <ClosedEyeIcon /> : <EyeIcon />} Opportunities
               </Button>
            </PageHeader>

            <Container>
               {showOpportunities && (<>
                  <div className="bg-primary-900 rounded-sm px-3 py-3">
                     <h2 className="text-primary-150 text-2xl">Opportunities</h2>
                     <p className="text-primary-200 text-sm">Check below the leads converted to opportunities.</p>
                  </div>
                  <OpportunitiesTable />
               </>)}

               <LeadsTable />
            </Container>
         </div>
      </OpportunitiesProvider>
   );
}
