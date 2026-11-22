import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/icoach/account-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/registrati")({
  head: () =>
    pageHead(
      "Crea il tuo spazio",
      "Una nuova storia, la tua. Anteprima della registrazione iCoach.",
    ),
  component: RegistrationPreview,
});

function RegistrationPreview() {
  return <AuthPage register />;
}
