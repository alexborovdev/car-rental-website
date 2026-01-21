import CarImage from '@/widgets/facts-in-numbers/ui/CarImage'
import Facts from '@/widgets/facts-in-numbers/ui/Facts'
import styles from './FactsInNumbersSection.module.scss'

const FactsInNumbersSection = () => {
  return (
    <section
      className={`container-big ${styles.factsInNumbers}`}
      aria-labelledby="facts-in-numbers-title"
    >
      <div className={`surface ${styles.wrapper}`}>
        <h2 id="facts-in-numbers-title" className={styles.title}>
          Facts in numbers
        </h2>
        <p className={styles.subtitle}>
          Real results that show why customers trust our car rental service every day.
        </p>
        <CarImage />
        <Facts />
      </div>
    </section>
  )
}

export default FactsInNumbersSection