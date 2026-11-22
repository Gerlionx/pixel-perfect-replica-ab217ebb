import { createFileRoute } from "@tanstack/react-router";
import { CalendarPage } from "@/components/icoach/workspace-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/calendario")({
  head: () =>
    pageHead(
      "Calendario opportunità",
      "Ispirazioni stagionali e un calendario per preparare le tue creazioni.",
    ),
  component: CalendarPage,
});
