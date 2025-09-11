"use client";

import { Progress } from '@/components/ui/progress';
import { Hourglass } from 'lucide-react';

interface AvailabilityBarProps {
  vacancies: number;
}

export function AvailabilityBar({ vacancies }: AvailabilityBarProps) {
  const maxVacancies = 500;

  const progressValue = ((vacancies) / maxVacancies) * 100;

  return (
    <div className="bg-destructive text-destructive-foreground p-2 text-center font-bold font-headline sticky top-0 z-50 w-full">
      <div className="container mx-auto flex flex-col items-center justify-center gap-1">
        <div className="flex w-full items-center justify-center gap-2 sm:gap-4 flex-nowrap">
          <Hourglass className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
          <div className="flex-grow text-left">
              <span className="text-xs sm:text-base truncate block"> RESTAM: {vacancies} VAGAS</span>
          </div>
          <div className="w-2/5 max-w-[250px]">
            <Progress value={100 - progressValue} className="h-3 sm:h-4 bg-white border-2 border-black" indicatorClassName="bg-destructive" />
          </div>
        </div>
        <span className="text-[10px] font-normal leading-tight opacity-90 block sm:hidden whitespace-nowrap">
          Vagas sendo preenchidas em tempo real
        </span>
        <span className="text-[10px] font-normal leading-tight opacity-90 hidden sm:block">
          Vagas sendo preenchidas em tempo real
        </span>
      </div>
    </div>
  );
}
