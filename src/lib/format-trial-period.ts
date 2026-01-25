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

export function formatTrialPeriod(trialPeriod: CheckoutEventsTimePeriod) {
  const interval = formatInterval(trialPeriod.interval, trialPeriod.frequency);
  return `${trialPeriod.frequency} ${interval}`;
}
