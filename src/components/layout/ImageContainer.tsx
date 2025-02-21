export interface ImageContainerProps {
  src: string;
  alt?: string;
}

export const ImageContainer = ({ src, alt }: ImageContainerProps) => {
  return (
    <div className='image-container'>
      <img src={src} alt={alt} />
    </div>
  );
};
