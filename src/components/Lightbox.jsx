import LightboxComponent from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const Lightbox = ({ currentImage: slides, isOpen, setIsOpen }) => {
  return (
    <LightboxComponent
      carousel={{ finite: slides.length <= 1 }}
      controller={{
        touchAction: 'none' | 'pan-y',
        closeOnPullDown: true,
        closeOnBackdropClick: true,
      }}
      render={{
        buttonPrev: slides.length <= 1 ? () => null : undefined,
        buttonNext: slides.length <= 1 ? () => null : undefined,
      }}
      open
      close={() => setIsOpen(false)}
      slides={slides}
    />
  )
}

export default Lightbox
