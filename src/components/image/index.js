import * as React from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import * as styles from './index.module.css'

const ImageResource = createResource(
  src =>
    new Promise(resolve => {
      const image = new Image()
      image.onload = () => resolve(src)
      image.src = src
    })
)
const SuspendableImage = ({ src, ...rest }) => (
  <img src={ImageResource.read(src)} alt="no image" {...rest} />
)

const FallbackImgPlaceholder = ({ alt, className, ...rest }) => (
  <div className={styles.placeholderImage + ' ' + className} {...rest}>
    {alt}
  </div>
)

export const Img = ({ src, alt, ...rest }) => (
  <React.Suspense fallback={<FallbackImgPlaceholder alt={alt} {...rest} />}>
    <SuspendableImage src={src} {...rest} />
  </React.Suspense>
)
