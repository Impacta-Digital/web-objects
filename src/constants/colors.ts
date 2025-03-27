export const colors = {
  amberYellow: '#D4B400',
  azureBlue: '#348AE4',
  brickRed: '#CC3D25',
  burntOrange: '#D87A15',
  cloudWhite: '#F5F5F5',
  deepAzure: '#2B6CB0',
  emeraldGreen: '#28A745',
  forestTeal: '#1F7D74',
  graphiteGray: '#2D2D2D',
  midnightBlack: '#1A1A1A',
  pineGreen: '#1E7A34',
  polarWhite: '#F8F9FA',
  sageTeal: '#96B1AC',
  slateMoss: '#546360',
  turquoise: '#40E0D0',
};

export const darkTheme = {
  background: colors.midnightBlack,
  foreground: colors.cloudWhite,
  secondaryText: colors.sageTeal,
  accent: {
    primary: colors.azureBlue,
    secondary: colors.turquoise,
  },
  alerts: {
    fail: colors.brickRed,
    warning: colors.burntOrange,
    info: colors.amberYellow,
    success: colors.emeraldGreen,
  },
};

export const lightTheme = {
  background: colors.polarWhite,
  foreground: colors.graphiteGray,
  secondaryText: colors.slateMoss,
  accent: {
    primary: colors.deepAzure,
    secondary: colors.forestTeal,
  },
  alerts: {
    fail: colors.brickRed,
    warning: colors.burntOrange,
    info: colors.amberYellow,
    success: colors.pineGreen,
  },
};
