import { createFileRoute } from "@tanstack/react-router";
import { ShopPage } from "@/components/icoach/account-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/negozio")({
  head: () =>
    pageHead(
      "Collega il tuo negozio Etsy",
      "Anteprima visiva del collegamento autorizzato al tuo negozio Etsy.",
    ),
  component: ShopPage,
});
