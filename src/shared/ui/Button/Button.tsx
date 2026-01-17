import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Button.module.scss'

type Props = {
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  label?: string
  color?: 'yellow' | 'blue'
  onClick?: () => void
  to?: string
}

const Button = (props: Props) => {
  const {
    children,
    type = 'button',
    disabled = false,
    label,
    color = 'yellow',
    onClick,
    to
  } = props

  const className = clsx(
    styles.button,
    color === 'yellow' ? styles.yellow : styles.blue,
    disabled && 'disabled'
  )

  if (to) {
    return (
      <Link
        to={to}
        className={className}
        title={label}
        aria-label={label}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      title={label}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button