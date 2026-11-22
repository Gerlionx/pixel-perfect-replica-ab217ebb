import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/icoach/workspace-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Il mio spazio",
      "Il tuo spazio creativo per imparare, organizzare e crescere su Etsy.",
    ),
  component: HomePage,
});
