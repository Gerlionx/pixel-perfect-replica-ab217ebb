import { createFileRoute } from "@tanstack/react-router";
import { ResearchPage } from "@/components/icoach/workspace-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/ricerca")({
  head: () =>
    pageHead(
      "Ricerca prodotti e keyword",
      "Esplora idee e parole chiave nel pannello di ricerca iCoach. Dati dimostrativi.",
    ),
  component: ResearchPage,
});
