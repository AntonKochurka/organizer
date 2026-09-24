import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <main>
      <h1>Organizer</h1>
      <p>Your personal organization space.</p>
    </main>
  );
}