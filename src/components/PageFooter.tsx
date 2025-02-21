export interface PageFooterProps {
  title: string;
  course: string;
}

export const PageFooter = ({ title, course }: PageFooterProps) => {
  return (
    <footer className='page-footer'>
      {/* - - - - - spacer */}
      <div className='vertical-spacer--sm' />
      <div className='vertical-spacer--sm' />

      <div className='wrapper'>
        <div className='dashed-divider' />
        <div className='vertical-spacer--sm' />
        <p>
          <span className='title'>{title}</span> <span className='course'>{course}</span>
          <br />
          <span className='copyright'>© {new Date().getFullYear()} Impacta Digital</span>
        </p>
      </div>

      {/* - - - - - spacer */}
      <div className='vertical-spacer' />
    </footer>
  );
};
