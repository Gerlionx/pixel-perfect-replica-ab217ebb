import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/icoach/account-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/accedi")({
  head: () =>
    pageHead(
      "Accedi al tuo spazio",
      "Bentornata nel tuo spazio creativo iCoach. Anteprima visiva di accesso.",
    ),
  component: AuthPage,
});
