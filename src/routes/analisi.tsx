import { createFileRoute } from "@tanstack/react-router";
import { AnalyticsPage } from "@/components/icoach/account-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/analisi")({
  head: () =>
    pageHead(
      "Analisi del negozio",
      "Anteprima delle analisi del tuo negozio Etsy. Tutti i dati sono dimostrativi.",
    ),
  component: AnalyticsPage,
});
