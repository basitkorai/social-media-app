import LightboxComponent from 'yet-another-react-lightbox'
import Download from 'yet-another-react-lightbox/plugins/download'
import Share from 'yet-another-react-lightbox/plugins/share'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import { useAppContext } from '../context/context'
import { useRef } from 'react'

const Lightbox = ({}) => {
  const { isLightboxImage, toggleLightbox } = useAppContext()
  const zoomRef = useRef(null)

  return (
    <LightboxComponent
      carousel={{ finite: isLightboxImage.length <= 1 }}
      controller={{
        touchAction: 'none' | 'pan-y',
        closeOnPullDown: true,
        closeOnBackdropClick: true,
      }}
      render={{
        buttonPrev: isLightboxImage.length <= 1 ? () => null : undefined,
        buttonNext: isLightboxImage.length <= 1 ? () => null : undefined,
      }}
      open
      close={() => toggleLightbox(false)}
      slides={isLightboxImage.map((slide) => ({
        ...slide,
        share: { url: slide.src, title: `Photo by ${slide.title}` },
        download: `${slide.src}?download`,
      }))}
      zoom={{ ref: zoomRef }}
      plugins={[Download, Share, Zoom]}
    />
  )
}

export default Lightbox
