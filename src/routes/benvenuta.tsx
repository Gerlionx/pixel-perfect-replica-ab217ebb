import { createFileRoute } from "@tanstack/react-router";
import { WelcomePage } from "@/components/icoach/account-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/benvenuta")({
  head: () =>
    pageHead(
      "Il tuo spazio per crescere",
      "iCoach: il tuo spazio di business creativo per imparare, creare e crescere su Etsy.",
    ),
  component: WelcomePage,
});
