import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path d='M12 1C6.916 1 1.081 2.25 1.081 12S6.916 23 12 23s10.919-1.25 10.919-11S17.084 1 12 1Zm0 20c-5.354 0-8.919-1.53-8.919-9S6.646 3 12 3s8.919 1.53 8.919 9-3.565 9-8.919 9Z' />
    <path d='M12 6.461a1 1 0 0 0-1 1v5.667a1 1 0 1 0 2 0V7.461a1 1 0 0 0-1-1ZM12 15.544a.999.999 0 1 0 0 1.997.999.999 0 0 0 0-1.997Z' />
  </svg>
);
export { SvgComponent as IconExclamation };
