export interface ImageContainerProps {
  src: string;
  alt?: string;
  imgStyle?: React.CSSProperties;
}

export const ImageContainer = ({ src, alt, imgStyle }: ImageContainerProps) => {
  return (
    <div className='imageContainer'>
      <img src={src} alt={alt} style={imgStyle ?? {}} />
      <div className='imageLabel'>{alt}</div>
    </div>
  );
};
