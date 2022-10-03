import { HeroHeader } from "~/components/layout/headers/Hero";
import { Home } from "~/pages/home/hero";

export function HeroLayout() {
  return (
    <>
      <HeroHeader />
      <main>
        <Home />
      </main>
    </>
  )
}