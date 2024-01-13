const SIZES = {
  MOBILE_S: "320px",
  MOBILE_M: "375px",
  MOBILE_L: "425px",
  TABLET: "768px",
  LAPTOP: "1024px",
  LAPTOP_L: "1440px",
  DESKTOP: "2560px",
};

export const DEVICES = {
  MOBILE_S: `(min-width: ${SIZES.MOBILE_S})`,
  MOBILE_M: `(min-width: ${SIZES.MOBILE_M})`,
  MOBILE_L: `(min-width: ${SIZES.MOBILE_L})`,
  TABLET: `(min-width: ${SIZES.TABLET})`,
  LAPTOP: `(min-width: ${SIZES.LAPTOP})`,
  LAPTOP_L: `(min-width: ${SIZES.LAPTOP_L})`,
  DESKTOP: `(min-width: ${SIZES.DESKTOP})`,
};
