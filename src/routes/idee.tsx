import { createFileRoute } from "@tanstack/react-router";
import { IdeasPage } from "@/components/icoach/workspace-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/idee")({
  head: () =>
    pageHead(
      "Digital Product Lab",
      "Raccogli ispirazioni, idee di prodotto e collezioni nel tuo spazio creativo.",
    ),
  component: IdeasPage,
});
