import type { Benefit } from '@/widgets/benefits'
import styles from './BenefitsItem.module.scss'

const BenefitsItem = (props: Benefit) => {
  const {
    icon: Icon,
    title,
    description
  } = props

  return (
    <li className={styles.item}>
      <Icon aria-hidden="true" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </li>
  )
}

export default BenefitsItem