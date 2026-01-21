import HeroSection from '@/widgets/hero'
import BenefitsSection from '@/widgets/benefits'
import HowItWorksSection from '@/widgets/how-it-works'
import FactsInNumbersSection from '@/widgets/facts-in-numbers'
import AppDownloadSection from '@/widgets/app-download'

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FactsInNumbersSection />
      <AppDownloadSection />
    </main>
  )
}

export default HomePage