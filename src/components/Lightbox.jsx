import LightboxComponent from 'yet-another-react-lightbox'
import Download from 'yet-another-react-lightbox/plugins/download'
import Share from 'yet-another-react-lightbox/plugins/share'

import 'yet-another-react-lightbox/styles.css'
import { useAppContext } from '../context/context'

const Lightbox = ({}) => {
  const { isLightboxImage, toggleLightbox } = useAppContext()
  console.log(isLightboxImage[0])

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
      plugins={[Download, Share]}
    />
  )
}

export default Lightbox
