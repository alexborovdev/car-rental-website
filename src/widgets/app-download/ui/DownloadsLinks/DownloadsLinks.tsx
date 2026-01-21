import { downloadLinks } from '@/widgets/app-download'
import DownloadsLinksItem from '@/widgets/app-download/ui/DownloadsLinks/DownloadsLinksItem'
import styles from './DownloadsLinks.module.scss'

const DownloadsLinks = () => {
  return (
    <ul className={styles.links}>
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