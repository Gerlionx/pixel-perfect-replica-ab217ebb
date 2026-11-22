import { createFileRoute } from "@tanstack/react-router";
import { ListingPage } from "@/components/icoach/workspace-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/listing")({
  head: () =>
    pageHead(
      "Listing e SEO Studio",
      "Uno studio creativo per progettare e perfezionare le tue inserzioni Etsy.",
    ),
  component: ListingPage,
});
