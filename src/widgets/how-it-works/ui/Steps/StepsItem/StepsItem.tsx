import type { ComponentType, SVGProps } from 'react'
import styles from './StepsItem.module.scss'

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
}

const StepsItem = (props: Props) => {
  const {
    icon: Icon,
    title,
    description
  } = props

  return (
    <li>
      <div className={styles.wrapper}>
        <Icon />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  )
}

export default StepsItem