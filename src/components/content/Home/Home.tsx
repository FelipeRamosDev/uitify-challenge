import { PageHeader } from '@/components/headers';
import { Container } from '@/components/layout';
import { LeadsTable } from '@/components/tables';

export default function Home(): React.JSX.Element {

   return (
      <div className="Home">
         <PageHeader
            title="Leads Conversion"
            description="Optimize your sales funnel and boost conversions with our powerful tools."
         />

         <Container>
            <LeadsTable />
         </Container>
      </div>
   );
}
