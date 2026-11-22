import { createFileRoute } from "@tanstack/react-router";
import { CoachPage } from "@/components/icoach/workspace-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/coach")({
  head: () =>
    pageHead(
      "Il mio AI Coach",
      "Il tuo spazio per domande, idee e prossimi passi. Anteprima del coach iCoach.",
    ),
  component: CoachPage,
});
