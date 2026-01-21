import type { DownloadLink } from '@/widgets/app-download'

const DownloadsLinksItem = (props: DownloadLink) => {
  const {
    icon: Icon,
    href,
    label
  } = props

  return (
    <li>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon aria-hidden="true" />
      </a>
    </li>
  )
}

export default DownloadsLinksItem