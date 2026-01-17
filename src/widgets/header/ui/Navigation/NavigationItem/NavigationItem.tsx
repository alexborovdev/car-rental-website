import { NavLink, useLocation } from 'react-router-dom'
import { type NavItem } from '@/widgets/header'
import styles from './NavigationItem.module.scss'

type Props = NavItem & {
  onClick?: () => void
}

const NavigationItem = (props: Props) => {
  const {
    label,
    href,
    description,
    onClick
  } = props

  const { pathname } = useLocation()
  const isActive = pathname === href

  return (
    <li>
      <NavLink
        to={href}
        className={styles.link}
        title={description}
        aria-label={description}
        aria-current={isActive ? 'page' : undefined}
        onClick={onClick}
      >
        {label}
      </NavLink>
    </li>
  )
}

export default NavigationItem