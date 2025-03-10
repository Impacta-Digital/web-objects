export interface PageFooterProps {
  title: string;
  course: string;
}

export const PageFooter = ({ title, course }: PageFooterProps) => {
  return (
    <footer className='pageFooter'>
      {/* - - - - - spacer */}
      <div className='verticalSpacer--sm' />

      <div className='tightWrapper'>
        <div className='dashedDivider' />

        {/* - - - - - spacer */}
        <div className='verticalSpacer--sm' />

        <p>
          <span className='title'>{title}</span> <span className='course'>{course}</span>
          <br />
          <span className='copyright'>© {new Date().getFullYear()} Impacta Digital</span>
        </p>

        {/* - - - - - spacer */}
        <div className='verticalSpacer' />
      </div>
    </footer>
  );
};
