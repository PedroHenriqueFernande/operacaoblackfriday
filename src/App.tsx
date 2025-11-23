import { Hero } from './components/Hero'
import { MissionBriefing } from './components/MissionBriefing'
import { StrategyReveal } from './components/StrategyReveal'
import { ResultsSection } from './components/ResultsSection'
import { OpportunitySection } from './components/OpportunitySection'
import { UrgencySection } from './components/UrgencySection'
import { LeaderSection } from './components/LeaderSection'

function App() {
  return (
    <main className="w-full min-h-screen bg-military-black text-white">
      <Hero />
      <MissionBriefing />
      <StrategyReveal />
      <ResultsSection />
      <OpportunitySection />



      <UrgencySection />
      <LeaderSection />
    </main>
  )
}

export default App
