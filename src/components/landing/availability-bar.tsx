
"use client";

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Hourglass } from 'lucide-react';

export function AvailabilityBar() {
  const [vacancies, setVacancies] = useState(78);
  const maxVacancies = 150;

  useEffect(() => {
    // Set initial random vacancies between 60 and 80
    setVacancies(Math.floor(Math.random() * (80 - 60 + 1)) + 60);
  }, []);

  useEffect(() => {
    if (vacancies <= 20) return; // Stop countdown at a lower limit

    const interval = setInterval(() => {
      setVacancies((prev) => (prev > 20 ? prev - 1 : prev));
    }, 8000 + Math.random() * 4000); // Decrease every 8-12 seconds

    return () => clearInterval(interval);
  }, [vacancies]);

  const progressValue = ((vacancies) / maxVacancies) * 100;

  return (
    <div className="bg-white text-primary p-2 text-center font-bold font-headline sticky top-0 z-50 shadow-md w-full">
      <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-nowrap">
        <Hourglass className="text-primary h-4 w-4 sm:h-6 sm:w-6 flex-shrink-0" />
        <span className="text-xs sm:text-base truncate"> RESTAM APENAS: {vacancies} VAGAS</span>
        <div className="w-1/3 max-w-[200px] flex-shrink-0">
          <Progress value={100 - progressValue} className="h-3 sm:h-4 bg-accent/30 border border-primary" />
        </div>
      </div>
    </div>
  );
}
