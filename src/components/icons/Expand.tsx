import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' {...props}>
    <path d='M21 24h-5v-2h5a1 1 0 0 0 1-1v-5h2v5a3 3 0 0 1-3 3ZM2 8H0V3a3 3 0 0 1 3-3h5v2H3a1 1 0 0 0-1 1ZM8 24H3a3 3 0 0 1-3-3v-5h2v5a1 1 0 0 0 1 1h5ZM24 8h-2V3a1 1 0 0 0-1-1h-5V0h5a3 3 0 0 1 3 3Z' />
  </svg>
);
export { SvgComponent as IconExpand };
