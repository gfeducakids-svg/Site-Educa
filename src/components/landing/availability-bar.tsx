
"use client";

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Hourglass } from 'lucide-react';

export function AvailabilityBar() {
  const [vacancies, setVacancies] = useState(25);
  const maxVacancies = 150;

  useEffect(() => {
    // Set initial vacancies to 25
    setVacancies(25);
  }, []);

  useEffect(() => {
    if (vacancies <= 5) return; // Stop countdown at a lower limit

    const interval = setInterval(() => {
      setVacancies((prev) => (prev > 5 ? prev - 1 : prev));
    }, 15000 + Math.random() * 5000); // Decrease every 15-20 seconds

    return () => clearInterval(interval);
  }, [vacancies]);

  const progressValue = ((vacancies) / maxVacancies) * 100;

  return (
    <div className="bg-destructive text-destructive-foreground p-2 text-center font-bold font-headline sticky top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-nowrap">
        <Hourglass className="h-4 w-4 sm:h-6 sm:w-6 flex-shrink-0" />
        <span className="text-xs sm:text-base truncate"> RESTAM: {vacancies} VAGAS</span>
        <div className="w-1/3 max-w-[200px] flex-shrink-0">
          <Progress value={100 - progressValue} className="h-3 sm:h-4 bg-white border-2 border-black" indicatorClassName="bg-destructive" />
        </div>
      </div>
    </div>
  );
}
