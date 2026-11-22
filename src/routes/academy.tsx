import { createFileRoute } from "@tanstack/react-router";
import { AcademyPage } from "@/components/icoach/workspace-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/academy")({
  head: () =>
    pageHead(
      "Beginner Academy",
      "Discover, Launch, Grow: il tuo percorso per iniziare e crescere su Etsy.",
    ),
  component: AcademyPage,
});
