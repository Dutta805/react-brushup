import React, { lazy, Suspense} from 'react';

const LazyComp = lazy(() =>  import('./LazyComponent/LazyComponent'));

export default function LazyLoadingComponent() {
  return (
    <Suspense fallback={<>loading....</>}>
      <LazyComp />
    </Suspense>
  )
}
