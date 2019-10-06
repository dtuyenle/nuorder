import { css } from 'styled-components';
import thm from './theme';

const sizes = {
  wide: thm.sizes.breakpoints.xl - 1,
  desktop: thm.sizes.breakpoints.lg - 1,
  tablet: thm.sizes.breakpoints.md - 1,
  phone: thm.sizes.breakpoints.sm - 1,
};

const mediaQueryString = deviceType => `(max-width: ${sizes[deviceType] / 16}em)`;

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, deviceType) => {
  acc[deviceType] = (...args) => css`
    @media ${mediaQueryString(deviceType)} {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export { media as default, sizes, mediaQueryString };
