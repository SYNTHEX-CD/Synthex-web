"use client";

import {
  Choicebox,
  ChoiceboxItem,
  ChoiceboxItemContent,
  ChoiceboxItemHeader,
  ChoiceboxItemIndicator,
  ChoiceboxItemSubtitle,
  ChoiceboxItemTitle,
} from "@/components/ui/choicebox";
import { Skeleton } from "@/components/ui/skeleton";
import { type Price, usePaddlePrices } from "@/hooks/use-paddle-prices";

export const plans = [
  {
    priceId: "pri_01jx2rwhdtm4b5f3aj1ds3b0s4",
    tag: "Économisez 17 %",
  },
  {
    priceId: "pri_01jx2rx1t30hxejpb5v0vav4nv",
  },
];

const intervalLabels: Record<string, string> = {
  day: "jour",
  week: "semaine",
  month: "mois",
  year: "an",
};

function formatInterval(interval?: string) {
  if (!interval) return "";
  return intervalLabels[interval] ?? interval;
}

function priceDescription(price: Price) {
  const interval = formatInterval(price.interval);
  return `Renouvellement automatique à ${price.total}${interval ? ` par ${interval}` : ""}.`;
}

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function PlanSelect({ value, onChange }: Props) {
  const { prices, loading } = usePaddlePrices(plans, "FR");

  if (loading) {
    return (
      <>
        <div className="mb-6 grid w-full grid-cols-2 justify-center gap-4">
          <Skeleton className="h-38 w-full" />
          <Skeleton className="h-38 w-full" />
        </div>
        <Skeleton className="mb-6 h-5 w-full" />
      </>
    );
  }

  return (
    <>
      <Choicebox className="mb-6 grid w-full grid-cols-2 justify-center gap-4" value={value} onValueChange={onChange}>
        {plans.map((plan) => (
          <ChoiceboxItem
            value={plan.priceId}
            key={plan.priceId}
            className="bg-card relative flex flex-col items-center rounded-lg px-8 py-6"
          >
            {plan.tag && (
              <span className="bg-accent border-accent-foreground absolute -top-4 left-0 rounded-full border-2 px-2 py-1 text-xs font-semibold text-white md:left-1/2 md:-translate-x-1/2">
                {plan.tag}
              </span>
            )}
            <ChoiceboxItemHeader className="w-full text-center">
              <ChoiceboxItemTitle>{prices[plan.priceId].name}</ChoiceboxItemTitle>
              <ChoiceboxItemSubtitle className="text-base">{prices[plan.priceId].total}</ChoiceboxItemSubtitle>
            </ChoiceboxItemHeader>
            <ChoiceboxItemContent>
              <ChoiceboxItemIndicator />
            </ChoiceboxItemContent>
          </ChoiceboxItem>
        ))}
      </Choicebox>
      {prices[value]?.interval && (
        <div className="text-muted-foreground mb-6 text-center text-base">{priceDescription(prices[value])}</div>
      )}
    </>
  );
}
