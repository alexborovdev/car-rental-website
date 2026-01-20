import IconOne from '@/shared/assets/icons/facts/1.svg?react'
import IconTwo from '@/shared/assets/icons/facts/2.svg?react'
import IconThree from '@/shared/assets/icons/facts/3.svg?react'
import IconFour from '@/shared/assets/icons/facts/4.svg?react'
import carImage from '@/shared/assets/images/car-shadow-1.webp'
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
        <img
          className={styles.image}
          src={carImage}
          alt=""
          width="800"
          height="480"
          loading="lazy"
          aria-hidden="true"
        />
        <dl className={styles.list}>
          <div className={styles.item}>
            <IconOne />
            <div className={styles.description}>
              <dt className={styles.value}>500+</dt>
              <dd className={styles.label}>Cars</dd>
            </div>
          </div>
          <div className={styles.item}>
            <IconTwo />
            <div className={styles.description}>
              <dt className={styles.value}>20k+</dt>
              <dd className={styles.label}>Customers</dd>
            </div>
          </div>
          <div className={styles.item}>
            <IconThree />
            <div className={styles.description}>
              <dt className={styles.value}>25+</dt>
              <dd className={styles.label}>Years</dd>
            </div>
          </div>
          <div className={styles.item}>
            <IconFour />
            <div className={styles.description}>
              <dt className={styles.value}>20m+</dt>
              <dd className={styles.label}>Miles</dd>
            </div>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default FactsInNumbersSection