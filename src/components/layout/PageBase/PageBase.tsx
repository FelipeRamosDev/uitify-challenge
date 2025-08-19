import { TopHeader } from '@/components/headers';

// Types
import type React from 'react';
import type { ComponentBaseProps } from '@/types/base.types';

export default function PageBase({ children }: ComponentBaseProps): React.ReactElement {
   return (
      <div className="PageBase">
         <TopHeader />
         {children}
      </div>
   );
}
