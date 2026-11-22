import { createFileRoute } from "@tanstack/react-router";
import { OnboardingPage } from "@/components/icoach/account-pages";
import { pageHead } from "@/components/icoach/shared";

export const Route = createFileRoute("/onboarding")({
  head: () =>
    pageHead(
      "Il tuo nuovo inizio",
      "Un’introduzione accogliente al tuo spazio di business creativo iCoach.",
    ),
  component: OnboardingPage,
});
