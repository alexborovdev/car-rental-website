import DownloadsLinks from '@/shared/ui/DownloadsLinks'
import PhonesImage from '@/widgets/app-download/ui/PhonesImage'
import styles from './AppDownloadSection.module.scss'

const AppDownloadSection = () => {
  return (
    <section
      className={`container-small ${styles.appDownload}`}
      aria-labelledby="app-download-title"
    >
      <div className={styles.wrapper}>
        <h2
          id="app-download-title"
          className={styles.title}
        >
          Download<br />
          mobile app
        </h2>
        <p className={styles.description}>
          Book, manage, and track your rentals in one place.<br />
          Find available cars instantly, get real-time updates, and handle your trips on the go - fast, simple, and secure.
        </p>
        <DownloadsLinks />
      </div>
      <PhonesImage />
    </section>
  )
}

export default AppDownloadSection