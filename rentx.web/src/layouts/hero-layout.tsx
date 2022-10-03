import { HeroHeader } from "~/components/layout/headers/Hero";

import { HeroRoutes } from "~/routes/hero.routes";

export function HeroLayout() {
  return (
    <>
      <HeroHeader />
      <main>
        <HeroRoutes />
      </main>
    </>
  )
}