import React from 'react';
import { PageBase } from '@/components/layout';
import { Home } from './components/content';

function App(): React.JSX.Element {
  return (
    <PageBase>
      <Home />
    </PageBase>
  );
}

export default App;
