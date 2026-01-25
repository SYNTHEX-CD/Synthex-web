import { CheckoutEventsTimePeriod } from "@paddle/paddle-js";

const intervalLabels: Record<string, [string, string]> = {
  day: ["jour", "jours"],
  week: ["semaine", "semaines"],
  month: ["mois", "mois"],
  year: ["an", "ans"],
};

function formatInterval(interval: string, frequency: number) {
  const [singular, plural] = intervalLabels[interval] ?? [interval, `${interval}s`];
  return frequency > 1 ? plural : singular;
}

export function formatBillingCycle(billingCycle: CheckoutEventsTimePeriod | null | undefined): string {
  if (!billingCycle) {
    return "";
  }

  const { frequency, interval } = billingCycle;
  return frequency === 1 ? formatInterval(interval, frequency) : `${frequency} ${formatInterval(interval, frequency)}`;
}
