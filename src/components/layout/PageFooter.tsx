export interface PageFooterProps {
  title: React.ReactNode;
}

export const PageFooter = ({ title }: PageFooterProps) => {
  return (
    <footer className='pageFooter'>
      {/* - - - - - spacer */}
      <div className='verticalSpacer--sm' />

      <div className='tightWrapper'>
        <div className='dashedDivider' />

        {/* - - - - - spacer */}
        <div className='verticalSpacer--sm' />

        <p>
          <span className='title'>{title}</span>
          <br />
          <span className='copyright'>© {new Date().getFullYear()} Impacta Digital</span>
        </p>

        {/* - - - - - spacer */}
        <div className='verticalSpacer' />
      </div>
    </footer>
  );
};
