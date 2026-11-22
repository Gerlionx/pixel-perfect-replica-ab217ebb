import { createFileRoute } from "@tanstack/react-router";
import { PlanPage } from "@/components/icoach/workspace-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/piano")({
  head: () =>
    pageHead(
      "Piano di crescita",
      "Piccoli obiettivi e un piano settimanale per il tuo business creativo.",
    ),
  component: PlanPage,
});
