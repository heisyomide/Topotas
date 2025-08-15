import { Suspense } from 'react';
import TourClient from '../components/tourClient';

export default function ToursPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading tour details...</div>}>
      <TourClient />
    </Suspense>
  );
}