import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/icoach/account-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/impostazioni")({
  head: () =>
    pageHead(
      "Impostazioni e profilo",
      "Personalizza il tuo profilo e le tue preferenze nello spazio iCoach.",
    ),
  component: SettingsPage,
});
