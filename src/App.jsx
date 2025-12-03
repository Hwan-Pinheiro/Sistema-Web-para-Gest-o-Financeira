import React from 'react';
import { Helmet } from 'react-helmet';
import Dashboard from '@/components/Dashboard';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Financial Control - Manage Your Money</title>
        <meta name="description" content="Track your income and expenses with an intuitive financial control application. View monthly summaries, manage transactions, and stay on top of your budget." />
      </Helmet>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'>
        <Dashboard />
        <Toaster />
      </div>
    </>
  );
}

export default App;