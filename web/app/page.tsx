"use client";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { DotScreenShader } from "@/components/ui/dot-shader-background";
export default function Home() {
  return (
    <>
      <div className="h-svh w-screen flex flex-col gap-4 md:gap-6 items-center justify-center relative px-4">
        <div className="absolute inset-0">
          <DotScreenShader />
        </div>
        <h1 className="text-6xl md:text-7xl font-light tracking-tight mix-blend-exclusion text-white whitespace-nowrap pointer-events-none">
          KUMA AI
        </h1>
        <p className="text-lg md:text-xl font-light text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed pointer-events-none">
          Força bruta. Mente estratégica.
        </p>
        <div>
          <DatabaseWithRestApi title= "O algoritmo da força está pronto. Monte seu treino"
            badgeTexts={{
              first: "Treino",
              second: "Foco",
              third: "Força",
              fourth: "Kuma",
            }}
          />
        </div>
      </div>
    </>
  );
}
