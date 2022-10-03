import { HeroHeader } from "~/components/layout/headers/Hero";
import { Home } from "~/pages/Home";


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