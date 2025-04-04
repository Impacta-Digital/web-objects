export interface TitleAndDividerProps {
  title: string;
  subheading?: string;
  borderColor: React.CSSProperties['borderColor'];
}

export const TitleAndDivider = ({ title, subheading, borderColor }: TitleAndDividerProps) => {
  return (
    <>
      <h1>{title}</h1>
      {subheading && <div className='subheading'>{subheading}</div>}
      <div className='doubleDivider' style={{ borderColor }}></div>

      {/* - - - - - spacer */}
      <div className='verticalSpacer' />
      <div className='verticalSpacer--sm' />
    </>
  );
};
