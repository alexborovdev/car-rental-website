import Benefits from '@/widgets/benefits/ui/Benefits'

const BenefitsSection = () => {
  return (
    <section
      className="container-big"
      aria-labelledby="benefits-title"
    >
      <h2
        id="benefits-title"
        className="visually-hidden"
      >
        Our benefits
      </h2>
      <Benefits />
    </section>
  )
}

export default BenefitsSection