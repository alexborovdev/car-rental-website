import clsx from 'clsx'
import { downloadLinks } from '@/shared/model/download-links'
import DownloadsLinksItem from '@/shared/ui/DownloadsLinks/DownloadsLinksItem'
import styles from './DownloadsLinks.module.scss'

type Props = {
  isColumn?: boolean
}

const DownloadsLinks = (props: Props) => {
  const {
    isColumn
  } = props

  return (
    <ul
      className={clsx(
        styles.links,
        isColumn && styles.column
      )}
    >
      {downloadLinks.map(({ icon, href, label }) => {
        return (
          <DownloadsLinksItem
            key={href}
            icon={icon}
            href={href}
            label={label}
          />
        )
      })}
    </ul>
  )
}

export default DownloadsLinks