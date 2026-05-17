import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col md:min-h-0">
      <main
        id="main-content"
        className="flex w-full flex-1 flex-col md:min-h-0 md:overflow-hidden"
      >
        <div className="flex flex-1 flex-col md:min-h-0">
          <div className="flex flex-col md:min-h-0 md:flex-1 md:justify-center">
            <Hero />
          </div>
        </div>
      </main>
    </div>
  );
}
