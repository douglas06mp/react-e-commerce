export default {
  down(breakpoint) {
    const breakpoints = {
      mobileS: '320px',
      mobileM: '375px',
      mobileL: '475px',
      tablet: '768px',
      tabletL: '936px',
      laptop: '1024px',
      laptopM: '1200px',
      laptopL: '1440px',
      desktop: '1760px',
    };
    return `@media screen and (max-width: ${breakpoints[breakpoint]})`;
  },
};
