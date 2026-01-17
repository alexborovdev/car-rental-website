import { useEffect, useRef, useState } from 'react'

export const useHelpContactOutsideClick = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current) {
        return
      }

      if (!ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)

  }, [isOpen])

  return {
    ref,
    isOpen,
    toggle: () => setIsOpen(prevState => !prevState),
  }
}