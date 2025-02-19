export const ImageContainer = ({ src, alt }: ImageContainerProps) => {
  return (
    <div className='image-container'>
      <img src={src} alt={alt} />
    </div>
  );
};

export interface ImageContainerProps {
  src: string;
  alt?: string;
}
