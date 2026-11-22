import { createFileRoute } from "@tanstack/react-router";
import { JournalPage } from "@/components/icoach/workspace-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/diario")({
  head: () =>
    pageHead(
      "Business Journal",
      "Un angolo tranquillo per i tuoi pensieri, le tue idee e il tuo percorso.",
    ),
  component: JournalPage,
});
