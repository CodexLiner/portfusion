  // pages/dashboard.tsx
   'use client'
  import React from 'react';
  import Card from '@/components/shared/card';
  import { Client } from '@clerk/nextjs/server';

  // async function Page() {
  //   return <main>dashboard home page</main>;
  // }

  const GridCardContainer: React.FC = () => {
    return (
      <div className="grid-container">
        <Card title="Draft1">
        </Card>
        <Card title="Draft2">
        </Card>
      </div>
    );
  };
  
  export default GridCardContainer;
