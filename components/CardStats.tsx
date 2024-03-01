import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

interface CardStatsProps {
  isBlue?: boolean;
  icon: LucideIcon;
  label: string;
  statsNumber: number;
  trendPercentage: number;
}

const CardStats = ({
  isBlue = false,
  icon: Icon,
  label,
  statsNumber,
  trendPercentage,
}: CardStatsProps) => {
  return (
    <div
      className={
        isBlue
          ? "bg-[#E3F5FF] p-6 rounded-md dark:text-neutral-600"
          : "bg-[#E5ECF6] p-6 rounded-md dark:text-neutral-600"
      }
    >
      <div className="flex flex-row justify-between items-center">
        <p className="text-[18px] truncate">{label}</p>
        <Icon className="h-8 w-8" />
      </div>
      <div className="flex flex-row justify-between items-center mt-8">
        <h1 className="text-[30px] font-bold truncate">{statsNumber}</h1>
        <div className="flex flex-row items-center gap-x-3">
          <h1 className="text-[18px]">{trendPercentage}</h1>
          {trendPercentage > 0 ? (
            <TrendingUp className="h-5 w-5" />
          ) : (
            <TrendingDown className="h-5 w-5" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardStats;
