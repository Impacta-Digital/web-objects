import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path d='M19 8v6a1 1 0 1 1-2 0V8.414L6.707 18.707a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L15.586 7H10a1 1 0 1 1 0-2h6c1.654 0 3 1.346 3 3Zm5-3v14c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm-2 0c0-1.654-1.346-3-3-3H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5Z' />
  </svg>
);
export { SvgComponent as IconNewTab };
