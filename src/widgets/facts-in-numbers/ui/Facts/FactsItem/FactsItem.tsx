import type { Fact } from '@/widgets/facts-in-numbers'
import styles from './FactsItem.module.scss'

const FactsItem = (props: Fact) => {
  const {
    icon: Icon,
    value,
    label
  } = props

  return (
    <div className={styles.item}>
      <Icon />
      <div className={styles.description}>
        <dt className={styles.value}>{value}</dt>
        <dd className={styles.label}>{label}</dd>
      </div>
    </div>
  )
}

export default FactsItem