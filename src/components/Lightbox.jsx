import LightboxComponent from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { useAppContext } from '../context/context'

const Lightbox = ({}) => {
  const { isLightboxImage, toggleLightbox } = useAppContext()

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
      slides={isLightboxImage}
    />
  )
}

export default Lightbox
