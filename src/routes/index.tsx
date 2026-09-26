import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <main className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-crust">
      <div className="flex flex-col items-center text-center gap-8 px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col">
            <h1 className="font-semibold text-[4rem] accent leading-none">
              Organizer
            </h1>
            <p className="max-w-md text-[1.05rem] font-light leading-relaxed text-subtext0">
              A quiet, minimal space to keep your thoughts in order and your focus intact.
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-label="Get started"
          className="
            flex h-14 w-14 items-center justify-center
            rounded-full
            bg-linear-to-br from-mauve via-lavender to-teal
            text-crust text-2xl
            transition-transform duration-200
            hover:scale-110 active:scale-95
          "
        >
          ›
        </button>
      </div>
    </main>
  );
}