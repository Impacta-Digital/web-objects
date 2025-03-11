export interface ImageContainerProps {
  src: string;
  alt?: string;
}

export const ImageContainer = ({ src, alt }: ImageContainerProps) => {
  return (
    <div className='imageContainer'>
      <img src={src} alt={alt} />
      <div className='imageLabel'>{alt}</div>
    </div>
  );
};
