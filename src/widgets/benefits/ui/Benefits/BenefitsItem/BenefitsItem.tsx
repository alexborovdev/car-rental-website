import type { ComponentType, SVGProps } from 'react'
import styles from './BenefitsItem.module.scss'

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
}

const BenefitsItem = (props: Props) => {
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