import Table from '@/app/ui/customers/table';
import { Suspense } from 'react';

import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};
 
export default async function Page({
    searchParams,
}:{
    searchParams?: {
        query?: string;
      };
}) {

    const query = searchParams?.query || '';

    const data = await fetchFilteredCustomers(query);
  return (
    <div className="w-full">
      <div>
        <Suspense key={query}>
            <Table customers={data ||[]} />
        </Suspense>
      </div>
    </div>
  );
}

